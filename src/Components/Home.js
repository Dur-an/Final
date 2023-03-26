import Client from './Client';
import Contact from './Contact';
import Door_Stop from './Door_Stop';
import Portfolio from './Portfolio';
import React, { useState, useEffect, useRef } from 'react';
import Loader from './Loader';
import './Navbar.css';
import logo from '../assets/img/logo-2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const portfolioRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handlePortfolioClick = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getActiveClass = (link) => {
    const element = document.getElementById(link);
    if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
      return "active";
    }
    return "";
  };

  const getLogoClass = () => {
    return scrollPosition > 0 ? "small" : "large";
  }

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="Navbar-css">
            <nav className={`navbar ${scrollPosition > 0 ? "scrolled" : ""}`}>
              <div className={`navbar__logo ${getLogoClass()}`}>
                <img src={logo} alt="Logo" />
              </div>
              <button className="navbar__toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
              </button>
              <ul className={`navbar__links ${showMenu ? "show-menu" : ""}`}>
                <li>
                  <a href="#" className={getActiveClass("home")}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className={getActiveClass("portfolio")} onClick={handlePortfolioClick}>
                    Doors
                  </a>
                </li>
                <li>
                  <a href="#contact" className={getActiveClass("contact")}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <Door_Stop id="Door" />
          <Client />
          <Portfolio id="portfolio" ref={portfolioRef} />
          <Contact id="contact" />
        </>
      )}
    </div>
  );
}

export default Home;
