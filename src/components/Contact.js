// import React from 'react';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'
import "./Contact.css"

const Contact = () => {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t894jrm', 'template_fpk5ts8', form.current, '3u8oNVdpm1UZAaZmz')
      .then((result) => {
        form.current.reset();
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      }, (error) => {
        form.current.reset();
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      { showSuccess && 
        <div className="popup">
          Message sent successfully!
        </div>
      }
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />
        <button type="submit" value="Send">Submit</button>
      </form>
    </section>
  );
};

export default Contact;

// const Contact = () => {
//   return (
//     <section id="contact">
//       <h2>Contact Me</h2>
//       <form>
//         <input type="text" placeholder="Name" required />
//         <input type="email" placeholder="Email" required />
//         <textarea placeholder="Message" required />
//         <button type="submit">Submit</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;
