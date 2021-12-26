import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../img/logo.png'

export const Header = () => {
   const [isMobileActive, setIsMobileActive] = useState('')

   const toggleMenu = () => {
    isMobileActive === 'active' ? setIsMobileActive('') : setIsMobileActive('active')
   }


  return (
    <header className={`header ${isMobileActive}`}>
      <div className="container header__container">
        <div className="header__logo"><img src={logo} alt="logo" /></div>
        <nav className="header__nav">
          <ul className={`header__links ${isMobileActive}`} >
            <li className="header__links-item">
              <NavLink
                exact="true"
                to="/"
                className={({ isActive }) =>
                  isActive ? "header__link header__link_active" : "header__link"
                }
              >
                Main
              </NavLink>
            </li>
            <li className="header__links-item">
              <NavLink
                exact="true"
                to="/people"
                className={({ isActive }) =>
                  isActive ? "header__link header__link_active" : "header__link"
                }
              >
                Characters
              </NavLink>
            </li>
            <li className="header__links-item">
              <NavLink
                exact="true"
                to="/planets"
                className={({ isActive }) =>
                  isActive ? "header__link header__link_active" : "header__link"
                }
              >
                Planets
              </NavLink>
            </li>
            <li className="header__links-item">
              <NavLink
                exact="true"
                to="/species"
                className={({ isActive }) =>
                  isActive ? "header__link header__link_active" : "header__link"
                }
              >
                Species
              </NavLink>
            </li>
            <li className="header__links-item">
              <NavLink
                exact="true"
                to="/starships"
                className={({ isActive }) =>
                  isActive ? "header__link header__link_active" : "header__link"
                }
              >
                Starships
              </NavLink>
            </li>
            <li className="header__links-item">
              <NavLink
                exact="true"
                to="/vehicles"
                className={({ isActive }) =>
                  isActive ? "header__link header__link_active" : "header__link"
                }
              >
                Vehicles
              </NavLink>
            </li>
          </ul>
          <button className={`mobile-menu__btn ${isMobileActive}`} onClick={toggleMenu}><span></span></button>
        </nav>
      </div>
    </header>
  );
};
