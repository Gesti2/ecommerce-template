import logo from "../assets/logo/logo.svg";
import arrowDown from "../assets/images/arrow_down.svg";
import navIcon from "../assets/images/nav_icon.svg";
import { useState, useEffect } from "react";
import "../scss/main.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state of isMenuOpen
  };

  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.querySelector(".nav__container");
      if (window.scrollY > 0) {
        navElement.classList.add("nav--scrolled");
      } else {
        navElement.classList.remove("nav--scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav__container">
      <nav className="nav">
        <div className="logo ">
          <img className="logo__symbol" src={logo} alt="PnP" />
          <h3 className="logo__name">Paws n&apos; Play</h3>
        </div>

        <div className="nav__menu">
          <ul className="nav__menu-list">
            <li className="nav__menu-item arrow-down">
              <a href="#shop">Shop</a>
              <img src={arrowDown} alt="" />
            </li>
            <li className="nav__menu-item arrow-down">
              <a href="#services">Services </a>
              <img src={arrowDown} alt="" />
            </li>
            <li className="nav__menu-item">
              <a href="#about">About Us</a>
            </li>
            <li className="nav__menu-item">
              <a href="#blog">Blog</a>
            </li>
            <li className="nav__menu-item">
              <a href="#footer">Contact</a>
            </li>
          </ul>
          <a href="#" className="btn btn__primary">
            Get Started
          </a>
        </div>

        <div className={`nav__mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <img
            src={navIcon}
            alt="Menu"
            className="nav-icon"
            onClick={toggleMenu}
          />
          <div className="nav__mobile-menu__items">
            <ul className="nav__mobile-menu__list">
              <li className="nav__mobile-menu__item">
                Shop
                <img src={arrowDown} alt="" />
              </li>
              <li className="nav__mobile-menu__item">
                Services
                <img src={arrowDown} alt="" />
              </li>
              <li className="nav__mobile-menu__item">About Us</li>
              <li className="nav__mobile-menu__item">Blog</li>
              <li className="nav__mobile-menu__item">Contact</li>
              <li className="nav__mobile-menu__item">
                <a href="#" className="btn btn__primary">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
