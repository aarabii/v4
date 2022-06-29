import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

import { HiOutlineMail } from 'react-icons/hi';
import { FaTelegramPlane } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5qju2zm', 'template_am38szn', form.current, 'KiorzUSNq5lRmavZ9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();  
  };

  return (
    <section id='contact'>
      <h5>Say, Hello</h5>
      <h2>Contact</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <HiOutlineMail className='contact_icons'/>
            <h4>Email</h4>
            <h5>nishu@duck.com</h5>
            <a href='mailto:nishu@duck.com' target="_blank">Send a message</a>
          </article>

          <article className='contact_option'>
            <FaTelegramPlane className='contact_icons'/>
            <h4>Telegram</h4>
            <h5>t.me/zzcwc</h5>
            <a href='https://t.me/zzcwc' target="_blank">Send a message</a>
          </article>

          <article className='contact_option'>
            <RiWhatsappFill className='contact_icons'/>
            <h4>Whatsapp</h4>
            <h5>+91-9546-456837</h5>
            <a href='https://wa.me/+919546457837' target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="?" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Say Hello 👋</button>
        </form>
      </div>
    </section>
  )
}

export default Contact