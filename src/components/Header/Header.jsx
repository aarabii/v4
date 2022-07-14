import React, { useEffect, useState } from 'react';
import './Header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import TypingEffect from './TypingEffect';

const placeholderText = ["Developer", "Programer", "Student",];

const Text = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = () => {
      setIndex(prevIndex => {
        if(prevIndex === placeholderText.length - 1){
          return 0;
        } 
        return prevIndex + 1;
      })
    };
    setInterval(timer, 3000);
    return () => { clearInterval(timer); }
  }, []);
  return placeholderText[index]
}

const Header = () => {

  return (
    <header>
      <div className='container header_container'>
        <h5>Hello, I'm</h5>
        <TypingEffect />
        {/* <h1>Aarab Nishchal</h1> */}
        <h5 className='text-light'><Text /></h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={require('../../assets/Pics/me2.jpg')} alt="me" />
        </div>

        <a href='#contact' className="scroll_down">Scroll Down.</a>
      </div>
    </header>
  )
}

export default Header