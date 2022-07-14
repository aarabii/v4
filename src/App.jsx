import React, {useState, useEffect} from 'react';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Exp from './components/Experience/Exp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

import PreLoader from './components/PreLoader/PreLoader';


const Home = () => {
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

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      {loading ? <PreLoader /> : <Home />}
    </div>
  )

}

export default App