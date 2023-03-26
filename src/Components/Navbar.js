import React, { useState, useEffect } from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
import  logo from '../assets/img/logo-2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
    return (
      <div className="Navbar-css">
        <nav className={`navbar ${scrollPosition > 0 ? "scrolled" : ""}`}>
          <div className="navbar__logo">
            <img src={logo} alt="Logo" />
          </div>
          <button className="navbar__toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <ul
            className={`navbar__links ${showMenu ? "show-menu" : ""}`}
          >
            <li>
             <Link to={"/Home"}> <a href="#">Home</a></Link>
            </li>
            <li>
                <Link to={"/Portfoloio"}> <a href="#">Doors</a></Link>
             
            </li>
            <li>
                <Link to={"/Contact"}><a href="#">Contact</a></Link>
              
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
