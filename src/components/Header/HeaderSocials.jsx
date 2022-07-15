import React from 'react'

import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsEnvelope } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://github.com/losier" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/aarab-nishchal/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="https://www.instagram.com/zzcwc" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
            <a href="https://twitter.com/uwu_losier" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
            <a href="mailto:aarab.nishchal@gmail.com"><BsEnvelope /></a>
        </div>
    )
}

export default HeaderSocials