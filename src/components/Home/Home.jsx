import React, { useState, useEffect } from "react";

import About from "../Section/About/About";
import Contact from "../Section/Contact/Contact";
import Exp from "../Section/Experience/Exp";
import Footer from "../Section/Footer/Footer";
import Header from "../Section/Header/Header";
import Nav from "../Section/Nav/Nav";

import PreLoader from "../Pages/PreLoader/PreLoader";

const HomePage = () => {
  const [inView, setInView] = useState("");
  return (
    <div>
      <Header setInView={setInView} />
      <Nav inView={inView} />
      <About setInView={setInView} />
      <Exp setInView={setInView} />
      <Contact setInView={setInView} />
      <Footer />
    </div>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return <div>{loading ? <PreLoader /> : <HomePage />}</div>;
};

export default Home;
