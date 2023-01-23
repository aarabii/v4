import React, { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import "../../styles/Contact.css";
import config from "../../config.json";

import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { BsSnapchat } from "react-icons/bs";

const Contact = () => {
  const Expire = (props) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
      }, props.delay);
      return () => clearTimeout(timer);
    }, [props.delay]);

    return visible ? <div>{props.children}</div> : <div />;
  };

  const [status, setStatus] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_azymqng",
        "template_jo2cvj7",
        form.current,
        "KiorzUSNq5lRmavZ9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setStatus("Some thing went wrong. Please try again later.");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Say, Hello</h5>
      <h2>Contact</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="contact_icons" />
            <h4>Email</h4>
            <h5>{config.mail}</h5>
            <a href={`mailto:${config.mail}`} target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <FaTelegramPlane className="contact_icons" />
            <h4>Telegram</h4>
            <h5>{config.telegram}</h5>
            <a href={config.telegram} target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsSnapchat className="contact_icons" />
            <h4>Snapchat</h4>
            <h5>nishu.kr</h5>
            <a
              href={`https://snapchat.com/add/${config.snapchatUsername}`}
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="?"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            👋 Say Hello
          </button>
          <div className="status">
            <Expire delay="5000">{status}</Expire>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
