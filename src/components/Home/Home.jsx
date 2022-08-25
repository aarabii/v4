import React, { useState, useEffect } from "react";

import About from "../Section/About/About";
import Contact from "../Section/Contact/Contact";
import Exp from "../Section/Experience/Exp";
import Footer from "../Section/Footer/Footer";
import Header from "../Section/Header/Header";
import Nav from "../Section/Nav/Nav";
import GithubRepo from "../Section/GithubProjects/GithubRepo";

import PreLoader from "../../hooks/PreLoader/PreLoader";

const HomePage = (props) => {
  const [inView, setInView] = useState("");
  const [section] = useState(props.section);

  useEffect(() => {
    let scrollTo = document.getElementById(section);
    if (scrollTo) scrollTo.scrollIntoView();
  }, [section]);

  return (
    <>
      <Nav inView={inView} />
      <Header setInView={setInView} />
      <About setInView={setInView} />
      <Exp setInView={setInView} />
      <GithubRepo setInView={setInView} />
      <Contact setInView={setInView} />
      <Footer />
    </>
  );
};

const Home = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>{loading ? <PreLoader /> : <HomePage section={props.section} />}</div>
  );
};

export default Home;
