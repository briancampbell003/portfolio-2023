import React, { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import gitLogo from './assets/git-logo.png';
import linkedinLogo from './assets/linkedin-logo.png';
import wordpressLogo from './assets/wordpress-logo.png';
import soundcloudLogo from './assets/soundcloud-logo.png';

import './Contact.css';

export default function Contact() {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);
  useEffect(() => emailjs.init('GsSqWgXBXaf-PXZD5'), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = 'service_8ejm071';
    const templateId = 'contact_form';
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value
      });
      alert('thank you for reaching out!');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='contact-container'>
      <div className='email-me-div'>
        <p className='email-me-text'>
          Send me an email using this form:
        </p>

        <form className='email-me-form' onSubmit={handleSubmit}>
          <div className='email-me-form-name-and-email'>
            <div className='email-me-form-name'>
              <input ref={nameRef} placeholder="first last" />
              <p>(your name)</p>
            </div>
            <div className='email-me-form-email'>
              <input ref={emailRef} type="email" placeholder="you@internet.com" />
              <p>(your email)</p>
            </div>
          </div>
          <div>
            {/* <label htmlFor=''>Message</label> */}
            <textarea className='email-me-form-textarea' ref={messageRef} type="text" placeholder="say something" />
          </div>
          <div className='email-me-form-btn'>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>

      <div className='other-sites'>
        <p>
          Find me on:
        </p>
        <div className='other-site-links'>
          <a
            className='other-site-link'
            href='https://github.com/briancampbell003'
            target="_blank"
            rel="noreferrer"
          >
            <img
              className='other-site-link-img'
              src={gitLogo}
              alt="github logo"
              width="50"
              heigth="50">
            </img>
            <p>GitHub</p>
          </a>
          <a
            className='other-site-link'
            href='https://www.linkedin.com/in/brian-campbell-978986195/'
            target="_blank"
            rel="noreferrer"
          >
            <img
              className='other-site-link-img'
              src={linkedinLogo}
              alt="linkedin logo"
              width="50"
              heigth="50">
            </img>
            <p>LinkedIn</p>
          </a>
          <a
            className='other-site-link'
            href='http://briancampbelltext.com/'
            target="_blank"
            rel="noreferrer"
          >
            <img
              className='other-site-link-img'
              src={wordpressLogo}
              alt="wordpress logo"
              width="50"
              heigth="50">
            </img>
            <p>WordPress</p>
          </a>
          <a
            className='other-site-link'
            href='https://soundcloud.com/brian-campbell-32'
            target="_blank"
            rel="noreferrer">
            <img
              className='other-site-link-img'
              src={soundcloudLogo}
              alt="soundcloud logo"
              width="50"
              heigth="50">
            </img>
            <p>SoundCloud</p>
          </a>

        </div>
      </div>
    </div>
  )
}