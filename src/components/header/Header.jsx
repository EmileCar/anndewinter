import "./header.css";
import React from 'react';
import logo from '../../assets/images/logo.png'
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

const Header = ({ title }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  const handleClickNavToggle = () => {
    console.log(isNavOpen)
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header elevation">
      <div className={`header__content ${isNavOpen ? 'preload open' : 'preload'}`}>
        <Link to="/" className="header__logo--container">
          <img className="header__logo" src={logo} alt="Annchanté Logo" />
          <h1 className="header__title">Annchanté</h1>
        </Link>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav className={`navbar ${isNavOpen ? 'navOpen' : ''}`}>
          <ul className="menu__items">
            <li className="menu__item">
              <Link className="item__link" to="/">
                Home
              </Link>
            </li>
            <li className="menu__item">
              <Link className="item__link" to="/bio">
                Bio
              </Link>
            </li>
            <li className="menu__item">
              <Link className="item__link" to="/media">
                Media
              </Link>
            </li>
            <li className="menu__item">
              <Link className="item__link" to="/annchante">
                Annchanté
              </Link>
            </li>
            <li className="menu__item">
              <Link className="item__link" to="/donna">
                D💋nna²
              </Link>
            </li>
            <li className="menu__item">
              <Link className="item__link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="toggle-button" onClick={handleClickNavToggle}>
          <span className="toggle-button-bar"></span>
          <span className="toggle-button-bar"></span>
          <span className="toggle-button-bar"></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
