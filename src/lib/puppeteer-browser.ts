import chromium from "@sparticuz/chromium";
import puppeteer, { type HTTPRequest, type Page } from "puppeteer-core";
import "./distrust-emudhra";

const HOP_BY_HOP = new Set(["host", "content-length", "connection", "transfer-encoding"]);

function headersFrom(request: HTTPRequest): Headers {
  const headers = new Headers();
  for (const [key, value] of Object.entries(request.headers())) {
    if (HOP_BY_HOP.has(key.toLowerCase())) continue;
    headers.set(key, value);
  }
  return headers;
}

/**
 * Chromium ships its own trust store and still accepts the compromised
 * eMudhra intermediates. Refetch every page request through Node, which
 * rejects those intermediates, and never fall back to Chromium's TLS.
 */
export async function routePageThroughNode(page: Page): Promise<void> {
  page.on("request", async (request) => {
    const url = request.url();
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      await request.continue();
      return;
    }

    try {
      const method = request.method();
      const body =
        method === "GET" || method === "HEAD" ? undefined : (request.postData() ?? undefined);
      const response = await fetch(url, {
        method,
        headers: headersFrom(request),
        body,
        redirect: "manual",
      });
      const responseHeaders: Record<string, string> = {};
      response.headers.forEach((value, key) => {
        if (HOP_BY_HOP.has(key.toLowerCase())) return;
        responseHeaders[key] = value;
      });
      await request.respond({
        status: response.status,
        headers: responseHeaders,
        body: Buffer.from(await response.arrayBuffer()),
      });
    } catch (error) {
      console.error("Blocked browser request", url, error);
      try {
        await request.abort("failed");
      } catch {
        // The page may already be closed.
      }
    }
  });
  await page.setRequestInterception(true);
}

const isServerless =
  process.env.VERCEL === "1" || Boolean(process.env.AWS_LAMBDA_FUNCTION_VERSION);

export async function launchBrowser() {
  if (isServerless) {
    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: { width: 1280, height: 720 },
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }

  const executablePath =
    process.env.PUPPETEER_EXECUTABLE_PATH ||
    process.env.CHROME_EXECUTABLE_PATH ||
    (process.platform === "darwin"
      ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
      : undefined);

  return puppeteer.launch({
    headless: true,
    executablePath,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
}
