import React from 'react';
import { PDFObject } from 'react-pdfobject'
import ResumePDF from './assets/Campbell_Resume2023cl_dev.pdf';
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

      <PDFObject url={ ResumePDF } />

    </div>
  );
}
