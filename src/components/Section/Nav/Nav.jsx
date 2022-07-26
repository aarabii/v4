import React, { useState, useEffect } from "react";

import "./Nav.css";

const Nav = ({ inView }) => {

  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    setActiveNav(inView);
  }, [inView]);

  const [showNav, setShowNav] = useState(() => null);

  useEffect(() => {
    let lastScrollPosition = 0;
    setShowNav(true);
    document.addEventListener(
      "scroll",
      function (e) {
        if (window.scrollY > lastScrollPosition) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
        lastScrollPosition = window.scrollY;
      },
      {
        passive: true,
      }
    );
  }, []);
  
  return (
    <nav style={
      {
        opacity: showNav ? 1 : 0,
        top: showNav ? 0 : "-100px",
      }
    }>
      <div className="nav-text">
        <h1>Aarab.</h1>
      </div>

      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>
        
        <div className="menu">
          <li>
            <a href="/#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><span>1.</span> Home</a>
          </li>

          <li>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><span>2.</span> About</a>
          </li>

          <li>
            <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><span>3.</span> Experience</a>
          </li>

          <li>
            <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}><span>4.</span> Projects</a>
          </li>

          <li>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><span>5.</span> Contact</a>
          </li>

          <span>
            <a href={() => false} onClick={() => alert("Coming Soon...")} className="nav_btn">
              Resume
            </a>
          </span>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
