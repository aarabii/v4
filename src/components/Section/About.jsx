import React from "react";
import "../../styles/About.css";
import config from "../../config.json";

import { FaAward } from "react-icons/fa";
import { BsFolder } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

var ProjectNumber;

fetch(`https://api.github.com/users/${config.githubUsername}}`)
  .then((response) => response.json())
  .then((data) => {
    ProjectNumber = `${data.public_repos + data.public_gists + "+"}`;
  })
  .catch(() => {
    ProjectNumber = "60+";
  });

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        {/* <div className="about_me"> */}
        {/* <div className="about_me-image">
            <img src={About_Image} alt="profile_pic" />
          </div> */}
        <div className="me image-card">
          <img src={require("../../assets/Pics/me2.jpg")} alt="me" />
        </div>
        {/* </div> */}

        <div className="about_content">
          <div className="about_card">
            <article className="about_card-content">
              <FaAward className="about_icons" />
              <h5>Experience</h5>
              <small>Curently studying</small>
            </article>

            <article className="about_card-content">
              <BsFolder className="about_icons" />
              <h5>Projects</h5>
              <small>{ProjectNumber}</small>
            </article>

            <article className="about_card-content">
              <BsStar className="about_icons" />
              <h5>Achivements</h5>
              <small>{config.numberOfAchivement}</small>
            </article>
          </div>
          <p>
            Hello! My name is <span>Aarab Nishchal</span> and I enjoy creating
            things that live on the internet. My interest in web development
            started back in high school and has been something that's been a
            part of my life for the past few years.
            <br />I am a creative problem solver who loves to create and is
            always trying new things.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
