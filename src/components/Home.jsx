import React, { useState, useEffect } from "react";

import About from "./Section/About";
import Contact from "./Section/Contact";
import Exp from "./Section/Exp";
import Footer from "./Section/Footer";
import Header from "./Section/Header";
import Nav from "./Section/Nav";
import GithubRepo from "./Section/GithubRepo";

import PreLoader from "./PreLoader";
import DotRing from "./DotRing";

const HomePage = (props) => {
  const [inView, setInView] = useState("");
  const [section] = useState(props.section);

  useEffect(() => {
    let scrollTo = document.getElementById(section);
    if (scrollTo) scrollTo.scrollIntoView();
  }, [section]);

  return (
    <>
      <DotRing />
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
