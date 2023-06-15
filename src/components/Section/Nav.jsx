import React, { useState, useEffect } from "react";
import config from "../../config.json";
import "../../styles/Nav.css";

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
    <nav
      style={{
        opacity: showNav ? 1 : 0,
        top: showNav ? 0 : "-100px",
      }}
    >
      <div className="nav-text">
        <h1>{config.firstName}.</h1>
      </div>

      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>

        <div className="menu">
          <li>
            <a
              href={"/#"}
              onClick={() => setActiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              <span>1.</span> Home
            </a>
          </li>

          <li>
            <a
              href={"#about"}
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "active" : ""}
            >
              <span>2.</span> About
            </a>
          </li>

          <li>
            <a
              href={"#experience"}
              onClick={() => setActiveNav("#experience")}
              className={activeNav === "#experience" ? "active" : ""}
            >
              <span>3.</span> Experience
            </a>
          </li>

          <li>
            <a
              href={"#projects"}
              onClick={() => setActiveNav("#projects")}
              className={activeNav === "#projects" ? "active" : ""}
            >
              <span>4.</span> Projects
            </a>
          </li>

          <li>
            <a
              href={"#contact"}
              className={activeNav === "#contact" ? "active" : ""}
            >
              <span>5.</span> Contact
            </a>
          </li>

          <span>
            <a
              href="/cta"
              onClick={() => {
                Notification.requestPermission().then((perm) => {
                  if (perm === "granted") {
                    new Notification("Aarab's Portfolio", {
                      body: "Seems like you are looking for my CV but unfortunately I don't have one yet. I will update this section as soon as I have one. Thank you hope you enjoy my portfolio.",
                      icon: "https://raw.githubusercontent.com/losier/v4/master/src/assets/Logo/android-chrome-512x512.png",
                      image:
                        "https://raw.githubusercontent.com/losier/v4/master/src/assets/othersPics/logo.png",
                      vibrate: true,
                      timestamp: true,
                      tag: "Aarab's Portfolio",
                    });
                  } else {
                    alert(
                      "Seems like we don't have access to send notifications. So i we just wanted to let you know that I don't have a CV yet. I will update this section as soon as I have one. Thank you hope you enjoy my portfolio."
                    );
                  }
                });
              }}
              className="nav_btn"
            >
              Resume
            </a>
          </span>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
