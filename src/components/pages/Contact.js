import React, { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
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
      <h1>→ Contact</h1>
      <div className='email-me-div'>
        <p className='email-me-text'>
          Reach out via email using this form:
        </p>

        <form className='email-me-form' onSubmit={handleSubmit}>
          <div className='email-me-form-name-and-email'>
            <div className='email-me-form-name'>
              <input ref={nameRef} placeholder="first last" />
              <label htmlFor=''>(your name)</label>
            </div>
            <div className='email-me-form-email'>
              <input ref={emailRef} type="email" placeholder="you@internet.com" />
              <label htmlFor=''>(your email)</label>
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

      <p>
        Find me on LINKEDIN
      </p>
      <p>
        Find me on GITHUB
      </p>
      <p>
        Find me on SOUNDCLOUD
      </p>
      <p>
        Check out my writing on MY OTHER SITE
      </p>
    </div>
  )
}


// export default function Contact () {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_8ejm071', 'contact_form', form.current, 'GsSqWgXBXaf-PXZD5')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };