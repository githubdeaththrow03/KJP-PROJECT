import React, {useState} from "react";
import logo from "../../img/2KLC_logo.png";
import './Navbar.css';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar" style={{ backgroundColor: "#B755F2" }}>
      <div className="navbar-logo">
        <a href="/" className="navbar-lebrown-city-link"><img src={logo} alt="2KLC Logo" style={{ width: "150px", height: "auto" }} />
        <h2 className="display-5">Lebrown City</h2></a>
      </div>
      <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'bi bi-x' : 'bi bi-list'} />
      </div>
      <div className={click ? 'nav-menu active' : 'nav-menu'}>
        <NavLink to='/Registration'><a href="registration" className="navbar-link h5" onClick={closeMobileMenu}>Registration Form</a></NavLink>
        <NavLink to='/About'><a href="about" className="navbar-link h5" onClick={closeMobileMenu}>About Us</a></NavLink>
        <NavLink to='/Gallery'><a href="gallery" className="navbar-link h5" onClick={closeMobileMenu}>Gallery</a></NavLink>
      </div>
    </nav>
  );
};

export default Navbar;