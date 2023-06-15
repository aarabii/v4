import React from "react";
import "../styles/preloader.scss";

const PreLoader = () => {
  return (
    <div className="main-container">
      <div className="content">
        <div className="planet">
          <div className="ring"></div>
          <div className="cover-ring"></div>
          <div className="spots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <p>loading</p>
      </div>
    </div>
  );
};

export default PreLoader;
