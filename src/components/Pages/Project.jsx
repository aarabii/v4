/* eslint-disable import/first */

import React, { Fragment, lazy, Suspense } from "react";
import DotRing from "../DotRing";
import Nav from "../Section/Nav";
import "../../styles/project.css";

const RepoStats = lazy(() => import("../ExternalComponents/RepoStats"));
import PreLoader from "../PreLoader";

const Project = () => {
  return (
    <Fragment>
      <Suspense fallback={<PreLoader />}>
        <Fragment>
          <DotRing />
          <div>
            <Nav />
            <div className="project_container">
              <h2>Projects</h2>
              <h5>Some are usefull, while some are for fun</h5>

              <RepoStats />
            </div>
          </div>
        </Fragment>
      </Suspense>
    </Fragment>
  );
};

export default Project;
