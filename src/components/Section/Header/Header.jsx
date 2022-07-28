import React from "react";
import "./Header.css";

import HeaderSocials from "./HeaderSocials";
import TypingEffect from "./TypingEffect";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_text">
          <h3>Hi, my name is</h3>
          {/* <h1>Aarab Nishchal</h1> */}
          <TypingEffect />
          <span>I build things that lives on Internet.</span>

          <p></p>
          <CTA />
        </div>

        <HeaderSocials />
      </div>

      {/* <div className="me image-card">
          <img src={require('../../../assets/Pics/me2.jpg')} alt="me" />
        </div> */}
    </header>
  );
};

export default Header;
