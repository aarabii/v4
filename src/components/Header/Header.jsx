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
        <h5>Hi, my name is</h5>
        <TypingEffect />
        {/* <h1>Aarab Nishchal</h1> */}
        <h5 className='text-light'><Text /></h5>
        <CTA />
        <HeaderSocials />

        <div className="me image-card">
          <img src={require('../../assets/Pics/me2.jpg')} alt="me" />
        </div>

        <div className='mail-container'>
          <a href='mailto:nishu@duck.com' className="mail">aarab.nishchal@gmail.com</a>
        </div>
      </div>
    </header>
  )
}

export default Header