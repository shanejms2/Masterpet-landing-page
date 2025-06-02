const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Go to your grooming report page
  await page.goto('http://localhost:3000/grooming-report', { waitUntil: 'networkidle0' });

  // Extract pet parent, pet name, and date from the page
  const { petParent, petName, reportDate } = await page.evaluate(() => {
    // Pet name from h1
    const petNameRaw = document.querySelector('#grooming-report h1')?.textContent || '';
    // Extract just the pet name (before 's Spa Day)
    const petName = petNameRaw.replace(/'s Spa Day.*/, '').trim();

    // Date from the p below h1
    const dateElem = document.querySelector('#grooming-report h1 + p');
    const reportDateRaw = dateElem?.textContent || '';
    // Format date to YYYY-MM-DD
    const dateObj = new Date(reportDateRaw);
    const yyyy = dateObj.getFullYear();
    const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
    const dd = String(dateObj.getDate()).padStart(2, '0');
    const reportDate = `${yyyy}-${mm}-${dd}`;

    // Pet parent from the pet details grid (label: Pet Parent)
    let petParent = '';
    const detailItems = document.querySelectorAll('.pet-details-card .grid .flex-col');
    detailItems.forEach((item) => {
      const label = item.querySelector('span:last-child')?.textContent;
      if (label && label.trim() === 'Pet Parent') {
        petParent = item.querySelector('span:first-child')?.textContent || '';
      }
    });

    return { petParent, petName, reportDate };
  });

  // Helper to make safe filenames
  const safe = (str) => str.replace(/[^a-z0-9\-]+/gi, '_').replace(/_+/g, '_').replace(/^_+|_+$/g, '');

  const baseFilename = `reports/grooming-report-${reportDate}-${safe(petParent)}-${safe(petName)}`;
  let filename = `${baseFilename}.pdf`;
  let counter = 1;
  while (fs.existsSync(filename)) {
    filename = `${baseFilename}-${counter}.pdf`;
    counter++;
  }

  // Ensure reports directory exists
  if (!fs.existsSync('reports')) {
    fs.mkdirSync('reports');
  }

  // Generate PDF with custom scale
  await page.pdf({
    path: filename,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    scale: 0.75 // 75% scale
  });

  await browser.close();
  console.log(`PDF generated: ${filename}`);
})(); 