import React from 'react';
import PDF from '../Omar.pdf';
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact">
        <div className="container">
            <h2>Contact</h2>
            <p>I'm currently looking to join a cross-functional team that values improving people's lives
            through accessible design. or have a project in mind? Let's connect.</p>
            <ul className='links'>
                <li className='nav-link linkedIn'>
                    <a href="https://www.linkedin.com/in/omar-hamed-69b084246/" target='_blank' rel="noreferrer"><FaLinkedin className='LinkedInIcon'/></a>
                </li>
                <li className='nav-link Gmail'><a href="mailto:omarhamed5500@gmail.com"><FaGoogle className='GmailIcon'/></a></li>
                <li className='nav-link btn CV'><a href={PDF} target='_blank' rel="noreferrer">Download CV</a></li>
            </ul>
        </div>
    </div>    
)
}
