import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(req: NextRequest) {
  const data = await req.json();

  // Launch Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Get the base URL from environment or default to localhost for development
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  // Go to your domain root first to get a valid origin for localStorage
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });

  // Inject data into localStorage
  await page.evaluate((input) => {
    localStorage.setItem('groomingReportData', JSON.stringify(input));
  }, data);

  // Now go to the grooming report page (should read from localStorage)
  await page.goto(`${baseUrl}/grooming-report`, { waitUntil: 'networkidle0' });

  // Generate PDF (auto-increment logic can be added if saving to disk, but here we return buffer)
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    scale: 0.75
  });

  await browser.close();

  // Return PDF as response
  return new NextResponse(Buffer.from(pdfBuffer), {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="grooming-report.pdf"',
    },
  });
} 