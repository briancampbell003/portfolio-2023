import React from 'react';
import gitLogo from './assets/git-logo.png';
import liveLogo from './assets/live-logo.png';

export default function ProjectCard({ projData }) {
  return (
    <div className='proj-card-container'>
      {projData.map((proj) => (
        <div className='proj-card' key={proj.key} style={{
          backgroundImage: `url("${proj.imgPath}")`
        }}>
          <div className='proj-title'>
            <div>{proj.title}</div>
          </div>
          <div className='hide' style={{
            backgroundImage: `linear-gradient(to right, rgba(255,0,0,0.1), rgba(255,255,255,.9))`
          }}>
            <a
              className='repo-link'
              href={proj.repo}
              target="_blank"
              rel="noreferrer"
            > Repo
              <img
                src={gitLogo}
                alt="git logo"
                width="50"
                heigth="50">
              </img>
            </a>
            <a
              className='deployed-link'
              href={proj.deployed}
              target="_blank"
              rel="noreferrer"
            > App
              <img
                src={liveLogo}
                alt="live app logo"
                width="50"
                heigth="50">
              </img>
            </a>
            <div className='proj-tech'>
              technologies: {proj.tech};
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}