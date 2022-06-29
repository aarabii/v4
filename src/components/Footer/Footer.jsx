import React from 'react';
import './Footer.css';

import { FaFacebookSquare, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer_logo'>Aarab Nishchal</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='social_media'>
        <a href='https://github.com/losier'><FaGithub /></a>
        <a href='https://www.instagram.com/zzcwc/'><FaInstagram /></a>
        <a href='https://twitter.com/twxey_'><FaTwitter /></a>
        <a href='https://www.facebook.com/zzcwc/'><FaFacebookSquare /></a>
        <a href='https://linktr.ee/zzcwc'><SiLinktree /></a>
      </div>

      <div className='copyright'>
        <small>&copy; Losier. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer