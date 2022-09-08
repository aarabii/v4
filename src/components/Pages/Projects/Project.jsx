import React from "react";
import DotRing from "../../DotRing/DotRing";
import Nav from "../../Section/Nav/Nav";
import "./project.css";

import RepoStats from "./RepoStats";

const Project = () => {
  return (
    <>
      <DotRing />
      <div>
        <Nav />
        <div className="project_container">
          <h2>Projects</h2>
          <h5>Some are usefull, while some are for fun</h5>

          <RepoStats />
        </div>
      </div>
    </>
  );
};

export default Project;
