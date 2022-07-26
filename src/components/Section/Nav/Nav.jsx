import React, { useState, useEffect } from "react";
import "./Nav.css";

import NavLogo from "./NavLogo";

const Nav = ({ inView }) => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    setActiveNav(inView);
  }, [inView]);

  return (
    <nav>
      <div className="nav-text">
        <NavLogo />
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
