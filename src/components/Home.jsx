import React, { useState, useEffect, Suspense, lazy } from "react";

// import About from "./Section/About";
// import Contact from "./Section/Contact";
// import Exp from "./Section/Exp";
// import Footer from "./Section/Footer";
// import Header from "./Section/Header";
// import Nav from "./Section/Nav";
// import GithubRepo from "./Section/GithubRepo";

const About = lazy(() => import("./Section/About"));
const Contact = lazy(() => import("./Section/Contact"));
const Exp = lazy(() => import("./Section/Exp"));
const Footer = lazy(() => import("./Section/Footer"));
const Header = lazy(() => import("./Section/Header"));
const Nav = lazy(() => import("./Section/Nav"));
const GithubRepo = lazy(() => import("./Section/GithubRepo"));

const PreLoader = lazy(() => import("./PreLoader"));
const DotRing = lazy(() => import("./DotRing"));

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
  return (
    <React.Fragment>
      <Suspense fallback={<PreLoader />}>
        <HomePage section={props.section} />
      </Suspense>
    </React.Fragment>
  );
};

export default Home;
