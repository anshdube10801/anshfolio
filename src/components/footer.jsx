import React from "react";
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import gmail from '../assets/gmail.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[var(--custom-head-text)] text-white py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4">
          <Link to="https://www.linkedin.com/in/ansh-dube/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="h-18 w-18" />
          </Link>
          <Link to="https://github.com/anshdube10801" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="h-18 w-18" />
          </Link>
          <Link to="mailto:anshdube10801@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={gmail} alt="gmail" className="h-18 w-18" />
          </Link>
        </div>

        {/* Copyright Text */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} - Ansh Dube.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
