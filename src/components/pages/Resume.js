import React from 'react';
import ResumePDF from './assets/Campbell_Resume2022_WebDev.pdf';
import downloadLogo from './assets/download-logo.png';


export default function Resume() {
  return (
    <div>
      <h1>→ Resume</h1>
      <p>
        <a className='download-link' href={ResumePDF} download>
          Download resume as PDF file
            <img
                src={downloadLogo}
                alt="download logo"
                width="40"
                heigth="40">
            </img>
        </a> 
      </p>
      <p>Education</p>
      <ul>
        <li>2U/BootCamp Spot Northwestern Coding Boot Camp; January 2023</li>
        <li>Northwestern University, Evanston, Illinois: Bachelor of Arts; major: Philosophy, June 2016</li>
        <li>GPA: 3.53 / 4.00</li>
      </ul>
      <p>Skills</p>
      <ul>  
        <li>JavaScript ES6+</li>
        <li>CSS3</li>
        <li>HTML5</li>
        <li>SQL</li>
        <li>Express</li>
        <li>ReactJS</li>
        <li>Node</li>
        <li>Handlebars</li>
        <li>Bootstrap</li>
      </ul>
    </div>
  );
}
