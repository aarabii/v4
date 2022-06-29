import React from 'react';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Exp from './components/Experience/Exp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Exp />
      <Contact />
      <Footer />
    </div>
  )
}

export default App