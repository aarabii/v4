import React from "react";
import "./aboutMe.css";

import Nav from "../../Section/Nav/Nav";
import ComingSoon from "../ComingSoon/ComingSoon";
import DotRing from "../../DotRing/DotRing";

const AboutMe = () => {
  return (
    <>
      <DotRing />
      <div>
        <Nav />
        <ComingSoon />
      </div>
    </>
  );
};

export default AboutMe;
