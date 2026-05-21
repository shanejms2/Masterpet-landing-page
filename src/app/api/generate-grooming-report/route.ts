import { NextRequest, NextResponse } from "next/server";
import { launchBrowser } from "@/lib/puppeteer-browser";

export const runtime = "nodejs";
export const maxDuration = 60;

const MAX_BODY_BYTES = 100_000;

export async function POST(req: NextRequest) {
  const contentLength = req.headers.get("content-length");
  if (contentLength && Number(contentLength) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  let data: unknown;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!data || typeof data !== "object") {
    return NextResponse.json({ error: "Report data is required" }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  let browser;

  try {
    browser = await launchBrowser();
    const page = await browser.newPage();

    await page.goto(baseUrl, { waitUntil: "domcontentloaded", timeout: 30_000 });

    await page.evaluate((input) => {
      localStorage.setItem("groomingReportData", JSON.stringify(input));
    }, data);

    await page.goto(`${baseUrl}/grooming-report`, {
      waitUntil: "networkidle0",
      timeout: 60_000,
    });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      scale: 0.75,
    });

    return new NextResponse(Buffer.from(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="grooming-report.pdf"',
      },
    });
  } catch (error) {
    console.error("Grooming report PDF generation failed:", error);
    return NextResponse.json(
      { error: "Failed to generate grooming report PDF" },
      { status: 500 }
    );
  } finally {
    await browser?.close();
  }
}
