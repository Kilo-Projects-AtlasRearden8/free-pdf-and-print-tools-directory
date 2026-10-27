# Free PDF & Print Tools Directory

No-account, free tools for merging, splitting, compressing, signing, filling forms, large print, and ebook conversion. No affiliate links.

Brought to you by **Asdale Dynamics, LLC** — beginner-friendly AI education, books, guides, and practical tools.

## How to use

Open `index.html` in any browser. Use the search box and category chips to filter the directory. Each listing shows cost, platform, steps, and an official link.

The site is static HTML with client-side search — no build step, no server, no account required.

## Tools

### Merge PDFs

**PDF24 Tools — Merge PDF**
- Cost: Free — no account required
- Platform: Web (any browser); optional Windows desktop tool
- Steps: Open the PDF24 Merge PDF tool · Drag your PDFs into the drop zone, or click to choose files · Drag files to reorder them, then click Merge PDF · Download the merged PDF
- Official: https://tools.pdf24.org/en/merge-pdf

**iLovePDF — Merge PDF**
- Cost: Free tier — no account required for basic use
- Platform: Web (any browser)
- Steps: Open iLovePDF Merge PDF · Select your PDFs or drag them into the drop zone · Click Merge PDF · Download the merged PDF
- Official: https://www.ilovepdf.com/merge_pdf

**qpdf — Merge (command line)**
- Cost: Free and open source — no account required
- Platform: Windows, Mac, Linux (command line)
- Steps: Install qpdf (brew install qpdf, apt install qpdf, or the Windows installer) · Run: qpdf --empty --pages file1.pdf file2.pdf -- merged.pdf · Find merged.pdf in the same folder
- Official: https://qpdf.sourceforge.io/

**pdftk / pdftk-java — Merge (command line)**
- Cost: Free — no account required
- Platform: Windows, Mac, Linux (command line)
- Steps: Install pdftk-java (the maintained rebuild of pdftk) · Run: pdftk file1.pdf file2.pdf cat output merged.pdf · Find merged.pdf in the same folder
- Official: https://gitlab.com/pdftk-java/pdftk

**PDF Arranger — Merge & Rearrange Pages**
- Cost: Free and open source — no account required
- Platform: Linux desktop (Flathub / package manager)
- Steps: Install PDF Arranger from Flathub or your package manager · Drag PDFs into the left sidebar · Drag pages between files to reorder them · Save the result as a new PDF
- Official: https://github.com/pdfarranger/pdfarranger

### Split PDFs

**PDF24 Tools — Split PDF**
- Cost: Free — no account required
- Platform: Web (any browser)
- Steps: Open the PDF24 Split PDF tool · Upload your PDF · Choose extract page ranges or split into single pages, then click Split · Download the split files (or the ZIP)
- Official: https://tools.pdf24.org/en/split-pdf

**iLovePDF — Split PDF**
- Cost: Free tier — no account required for basic use
- Platform: Web (any browser)
- Steps: Open iLovePDF Split PDF · Upload your PDF and choose how to split it · Click Split PDF · Download the results
- Official: https://www.ilovepdf.com/split_pdf

**qpdf — Split (command line)**
- Cost: Free and open source — no account required
- Platform: Windows, Mac, Linux (command line)
- Steps: Install qpdf · Run: qpdf --pages input.pdf 1-5,6-10 -- part.pdf · Or run: qpdf --split-pages input.pdf page to split every page into its own file
- Official: https://qpdf.sourceforge.io/

**pdftk / pdftk-java — Burst / Split (command line)**
- Cost: Free — no account required
- Platform: Windows, Mac, Linux (command line)
- Steps: Install pdftk-java · Run: pdftk input.pdf burst · Pages are saved as pg_0001.pdf, pg_0002.pdf, etc. · To grab a range: pdftk input.pdf cat 1-5 output part.pdf
- Official: https://gitlab.com/pdftk-java/pdftk

**PDF Arranger — Delete / Extract Pages**
- Cost: Free and open source — no account required
- Platform: Linux desktop (Flathub / package manager)
- Steps: Install PDF Arranger from Flathub or your package manager · Open your PDF · Select pages to delete or drag them out into a new file · Save the result
- Official: https://github.com/pdfarranger/pdfarranger

### Compress PDFs

**PDF24 Tools — Compress PDF**
- Cost: Free — no account required
- Platform: Web (any browser)
- Steps: Open the PDF24 Compress PDF tool · Upload your PDF and pick a compression strength · Click Compress PDF · Download the smaller PDF
- Official: https://tools.pdf24.org/en/compress-pdf

**iLovePDF — Compress PDF**
- Cost: Free tier — no account required for basic use
- Platform: Web (any browser)
- Steps: Open iLovePDF Compress PDF · Upload your PDF and choose a compression level · Click Compress PDF · Download the compressed file
- Official: https://www.ilovepdf.com/compress_pdf

**Ghostscript — Compress (command line)**
- Cost: Free and open source — no account required
- Platform: Windows, Mac, Linux (command line)
- Steps: Install Ghostscript (gs) · Run: gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=compressed.pdf input.pdf · Use /screen for smallest files, /ebook for balanced, /prepress for highest quality
- Official: https://ghostscript.com/

**Sejda — Compress PDF**
- Cost: Free tier (3 tasks per hour, up to 200 pages) — no account required
- Platform: Web (any browser)
- Steps: Open Sejda Compress PDF · Upload your PDF and choose a compression level · Click Compress PDF · Download the compressed file
- Official: https://www.sejda.com/compress-pdf

### Sign PDFs

**PDF24 Tools — Sign PDF**
- Cost: Free — no account required
- Platform: Web (any browser)
- Steps: Open the PDF24 Sign PDF tool · Upload your PDF and add your signature (draw, type, or upload an image) · Place the signature on the page, then click Sign · Download the signed PDF
- Official: https://tools.pdf24.org/en/sign-pdf

**LibreOffice Draw — Sign & Fill**
- Cost: Free and open source — no account required
- Platform: Windows, Mac, Linux (desktop)
- Steps: Open the PDF in LibreOffice Draw · Insert > Image to place a scanned signature, or draw with the toolbar tools · File > Export as PDF to save the signed file · Close and keep the exported PDF
- Official: https://www.libreoffice.org/

**Master PDF Editor (free version) — Sign**
- Cost: Free for non-commercial use — no account required
- Platform: Windows, Mac, Linux (desktop)
- Steps: Download and install the free version of Master PDF Editor · Open your PDF and place a signature with the annotation tools · Save the signed PDF
- Official: https://code-industry.net/masterpdfeditor/

**Xodo — Fill & Sign Online**
- Cost: Free — no account required for basic use
- Platform: Web (any browser)
- Steps: Open Xodo's online PDF tools · Upload your PDF and add a signature or initials · Place them on the page, then download the signed file
- Official: https://xodo.com/

### Fill PDF Forms

**Firefox / Chrome / Edge — Fill PDF Forms (built in)**
- Cost: Free — no account required
- Platform: Desktop browser (built-in viewer)
- Steps: Open the PDF in Firefox, Chrome, or Edge · Click each form field and type your answers · Print or choose Save as PDF to keep your filled copy · Note: this works on fillable forms; flat PDFs need LibreOffice Draw or PDF24
- Official: https://www.mozilla.org/firefox/

**LibreOffice Draw — Fill PDF Forms**
- Cost: Free and open source — no account required
- Platform: Windows, Mac, Linux (desktop)
- Steps: Open the PDF in LibreOffice Draw · Click form fields to type, or insert text boxes on flat PDFs · File > Export as PDF to save the filled file
- Official: https://www.libreoffice.org/

**pdftk / pdftk-java — Fill Forms (command line)**
- Cost: Free — no account required
- Platform: Windows, Mac, Linux (command line)
- Steps: Export an FDF data file from the form, or write one by hand · Run: pdftk form.pdf fill_form data.fdf output filled.pdf · Check filled.pdf for your entered values
- Official: https://gitlab.com/pdftk-java/pdftk

**Sejda — Fill & Sign PDF Forms**
- Cost: Free tier — no account required for basic use
- Platform: Web (any browser)
- Steps: Open Sejda's Fill and Sign PDF tool · Upload your PDF, type into fields, and add a signature if needed · Click Apply, then download the filled PDF
- Official: https://www.sejda.com/

### Large Print

**Browser Print — Large Print via Scale**
- Cost: Free — no account required
- Platform: Desktop browser (built-in print dialog)
- Steps: Open the PDF in Firefox, Chrome, or Edge · Press Ctrl+P (or Cmd+P on Mac) to open Print · Set Scale / Custom to 150% or 200%, and pick your paper size · Print, or choose Save as PDF to create a large-print copy
- Official: https://www.mozilla.org/firefox/

**PDF24 Tools — Scale / Resize Pages**
- Cost: Free — no account required
- Platform: Web (any browser)
- Steps: Open the PDF24 Scale PDF tool · Upload your PDF and enter a scale percentage (for example 140% for large print) · Click Scale, then download the enlarged pages
- Official: https://tools.pdf24.org/en/scale-pdf

**Ghostscript — Large Print Rescale (command line)**
- Cost: Free and open source — no account required
- Platform: Windows, Mac, Linux (command line)
- Steps: Install Ghostscript (gs) · Run: gs -sDEVICE=pdfwrite -dDEVICEWIDTHPOINTS=1224 -dDEVICEHEIGHTPOINTS=1584 -dPDFFitPage -dNOPAUSE -dQUIET -dBATCH -sOutputFile=largeprint.pdf input.pdf · That scales US Letter up to about 150% (1224 x 1584 points). Adjust dimensions for other sizes.
- Official: https://ghostscript.com/

### Convert to Ebook Formats

**Calibre — Convert PDF to EPUB / MOBI / AZW3**
- Cost: Free and open source — no account required
- Platform: Windows, Mac, Linux (desktop)
- Steps: Install Calibre · Add your PDF to the Calibre library · Select the book, click Convert books, and choose EPUB, MOBI, or AZW3 as the output format · Save to disk or send to your ereader
- Official: https://calibre-ebook.com/

**LibreOffice Writer — Open PDF, Export EPUB**
- Cost: Free and open source — no account required
- Platform: Windows, Mac, Linux (desktop)
- Steps: Open the PDF in LibreOffice Writer · Fix text and layout as needed · File > Export As > Export as EPUB · Save the EPUB file
- Official: https://www.libreoffice.org/

**Sigil — EPUB Editor (clean up converted ebooks)**
- Cost: Free and open source — no account required
- Platform: Windows, Mac, Linux (desktop)
- Steps: Open your converted EPUB in Sigil · Fix formatting, add a cover image, and edit book metadata · Save the EPUB and check it in an ereader app
- Official: https://sigil-ebook.com/

## License

MIT License. Copyright (c) 2026 Asdale Dynamics, LLC. See LICENSE.

## About

This directory is published by Asdale Dynamics, LLC (Indiana, formed October 2026), founded by Dylan Asdale — registered nurse turned AI author. No affiliate links, no accounts, no tracking.
