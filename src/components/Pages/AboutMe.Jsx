import React from "react";
import "../../styles/aboutMe.css";

import Nav from "../Section/Nav";
import ComingSoon from "./ComingSoon";
import DotRing from "../DotRing";

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
