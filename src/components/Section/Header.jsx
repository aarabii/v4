import React from "react";
import "../../styles/Header.css";
import config from "../../config.json";
import HeaderSocials from "../ExternalComponents/HeaderSocials";
import TypingEffect from "../ExternalComponents/TypingEffect";
import CTA from "../ExternalComponents/CTA";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_text">
          <h3>Hi, my name is</h3>
          <TypingEffect />
          <span>{config.bio}</span>

          <p></p>
          <CTA />
        </div>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
