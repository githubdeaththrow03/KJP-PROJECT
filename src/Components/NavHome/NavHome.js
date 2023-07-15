import React, { useState } from 'react';
import logo from '../../img/2KLC_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './NavHome.css';
import Navbar from "../../Components/Navbar/Navbar";

const NavHome = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className='nav-color'>
      <nav className="navbar" style={{ backgroundColor: '#38117A' }}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <a href="/">
              <img src={logo} alt="2KLC Logo" className="navbar-logo-img" />
            </a>
            <h2 className="display-5">Showcase 360</h2>
          </div>
          <div className={`menu-icon ${click ? 'active' : ''}`} onClick={handleClick}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className={`nav-menu ${click ? 'active' : ''}`}>
            <div className="dropdown">
              <button className="dropdown-button">
                Profile <FontAwesomeIcon icon={faChevronDown} />
              </button>
              <div className="dropdown-content">
                <a href="profile">Edit Profile</a>
                <a href="/">Log Out</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Navbar/>
    </div>
  );
};

export default NavHome;
