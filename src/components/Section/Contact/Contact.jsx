import React, { useRef, useEffect, useState } from "react";
import { useIsInViewport } from "../../utils/utils";

import emailjs from "emailjs-com";
import "./Contact.css";

import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { BsSnapchat } from "react-icons/bs";

const Contact = ({ setInView }) => {
  const contactRef = useRef(null);
  const isInViewport = useIsInViewport(contactRef);

  useEffect(() => {
    isInViewport && setInView("#contact");
  }, [isInViewport]);

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
    <section id="contact" ref={contactRef}>
      <h5>Say, Hello</h5>
      <h2>Contact</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="contact_icons" />
            <h4>Email</h4>
            <h5>nishu@duck.com</h5>
            <a href="mailto:nishu@duck.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <FaTelegramPlane className="contact_icons" />
            <h4>Telegram</h4>
            <h5>t.me/zzcwc</h5>
            <a href="https://t.me/zzcwc" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsSnapchat className="contact_icons" />
            <h4>Snapchat</h4>
            <h5>nishu.kr</h5>
            <a
              href="https://snapchat.com/add/nishu.kr"
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
