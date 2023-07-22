import React from 'react';
import ProjectCard from './ProjectCard';
import DreamJotBG from './assets/dreamJot.png';
import TeamGenBG from './assets/teamGen.png';
import TechBuzzBG from './assets/techBuzz.png';
import WeatherDashBG from './assets/weatherDash.png';
import MhlReloBG from './assets/mhlRelo.png';
import VaristasDigitalCafeBG from './assets/varistasDigitalCafe.png';
import NoteTakerBG from './assets/noteTaker.png';
import ehpBG from './assets/ehp.png';
import './Projects.css';

export default function Projects() {
  const projData = [
    {
      title: 'East Humboldt Pies',
      deployed: 'https://briancampbell003.github.io/east-humboldt-pies/',
      repo: 'https://github.com/briancampbell003/east-humboldt-pies',
      imgPath: ehpBG,
      key: '01',
      description: 'Promotional webpage for home-baked goods business',
      tech: 'JavaScript, ReactJS'
    },
    {
      title: 'MHL Relocation Guide',
      deployed: 'https://briancampbell003.github.io/mhl-rs-relocation/',
      repo: 'https://github.com/briancampbell003/mhl-rs-relocation',
      imgPath: MhlReloBG,
      key: '02',
      description: 'Informative React app built for Resident Services Staff at Mercy Housing Lakefront',
      tech: 'JavaScript, ReactJS, HMTL, CSS'
    },
    {
      title: 'Dream Jot',
      deployed: 'https://dream-jot.herokuapp.com/',
      repo: 'https://github.com/briancampbell003/dream-jot',
      imgPath: DreamJotBG,
      key: '03',
      description: 'Digital dream journal with community features',
      tech: 'Sequelize, ExpressJS, Handlebars'
    },
    {
      title: 'Team Profile Generator',
      deployed: 'https://briancampbell003.github.io/module-10-team-profile-demo/',
      repo: 'https://github.com/briancampbell003/module-10-team-profile-generator',
      imgPath: TeamGenBG,
      key: '04',
      description: 'Command-line application to create stylized page once provided with team member info',
      tech: 'Jest, NodeJS, Inquirer, CSS'
    },
    // {
    //   title: 'Weather Dash',
    //   deployed: 'https://briancampbell003.github.io/weather-dash/',
    //   repo: 'https://github.com/briancampbell003/weather-dash',
    //   imgPath: WeatherDashBG,
    //   key: '03',
    //   description: 'Forecast provider using API call to weather app based on user input',
    //   tech: 'JavaScript, HMTL, CSS'
    // },
    {
      title: 'Varistas Digital Cafe',
      deployed: 'https://briancampbell003.github.io/varistas-digital-cafe/',
      repo: 'https://github.com/briancampbell003/varistas-digital-cafe',
      imgPath: VaristasDigitalCafeBG,
      key: '05',
      description: '',
      tech: ''
    },
    {
      title: 'TechBuzz',
      deployed: 'https://techbuzz.herokuapp.com/',
      repo: 'https://github.com/briancampbell003/tech-buzz',
      imgPath: TechBuzzBG,
      key: '06',
      description: '',
      tech: ''
    },
    // {
    //   title: 'Note Taker',
    //   deployed: 'https://protected-mesa-67604.herokuapp.com/notes',
    //   repo: 'https://github.com/briancampbell003/module-11-note-taker',
    //   imgPath: NoteTakerBG,
    //   key: '06',
    //   description: '',
    //   tech: ''
    // },
  ]

  return (
    <div>
      <h1>→ Projects</h1>
      <div>
        <ProjectCard projData={projData} />
      </div>
    </div>
  );
}
