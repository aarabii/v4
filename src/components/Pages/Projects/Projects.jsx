import React from "react";
import Nav from "../../Section/Nav/Nav";
import "./project.css";
import { FiFolder, FiGithub } from "react-icons/fi";

const Reposds = async () => {
  const res = await fetch(
    "https://api.github.com/users/losier/repos?&sort=pushed&per_page=100&page=1"
  );
  const d = await res.json();
  const data = [];
  data.push(d);
  return (
    <div>
      {data.map(({ name, description, url, language }) => {
        return (
          <article key={Math.random()} className="Projects_list_item">
            <div className="project_logo">
              <FiFolder />
              <a className="view_btn" href={url}>
                <FiGithub />
              </a>
            </div>
            <h1>{name}</h1>
            <h4>{description}</h4>
            <small className="langData">{language}</small>
          </article>
        );
      })}
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <Nav />
      <div className="project_container">
        <h2>Projects</h2>
        <h5>Some are usefull, while some are for fun</h5>

        <div className="Projects">
          <input type="text" placeholder="Search for a project..."></input>
          <div className="Projects_list">
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
            <Reposds />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
