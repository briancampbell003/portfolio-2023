import React from 'react';
import PDFObject from 'pdfobject';
import ResumePDF from './assets/Campbell_Resume2022_dev.pdf';
import downloadLogo from './assets/download-logo.png';


export default function Resume() {
  return (
    <div>
      <h1>→ Resume</h1>
      <a className='download-link' href={ResumePDF} download>
        Download resume as PDF file
        <img
          src={downloadLogo}
          alt="download logo"
          width="40"
          heigth="40">
        </img>
      </a>

    </div>
  );
}
