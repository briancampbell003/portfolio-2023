import React, { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";


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
    <form onSubmit={handleSubmit}>
      <label htmlFor=''>Name</label>
      <input ref={nameRef} placeholder="your name" />
      <label htmlFor=''>Email</label>
      <input ref={emailRef} type="email" placeholder="your email" />
      <label htmlFor=''>Message</label>
      <input ref={messageRef} type="text" placeholder="say something" />
      <input type="submit" value="Send" />
    </form>
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