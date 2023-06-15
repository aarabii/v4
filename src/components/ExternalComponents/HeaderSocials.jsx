import React from "react";
import config from "../../config.json";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div>
      <div className="header_socials">
        <a
          href={`https://github.com/${config.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href={`https://www.linkedin.com/in/${config.linkdinUsername}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href={`https://www.instagram.com/${config.instagramUsername}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href={`https://twitter.com/${config.twitterUsername}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>
        <a href={`mailto:${config.mail2}`}>
          <BsEnvelope />
        </a>
      </div>

      <div className="mail-container">
        <a href={`mailto:${config.mail2}`} className="mail">
          {config.mail2}
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;
