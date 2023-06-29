import React, {useState} from "react";
import logo from "../../img/2KLC_logo.png";
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar" style={{ backgroundColor: "#B755F2" }}>
      <div className="navbar-logo">
        <a href="/" className="navbar-lebrown-city-link"><img src={logo} alt="2KLC Logo" className='m-0' style={{ width: "100px", height: "auto", margin: "10px" }} /></a>
        <a href="/" className="navbar-lebrown-city-link d-none d-sm-block"><h2 className="display-5 m-0">Lebrown City</h2></a>
      </div>
      <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'bi bi-x' : 'bi bi-list'} />
      </div>
      <div className={click ? 'nav-menu active' : 'nav-menu'}>
        <a href="about" className="navbar-link h5" onClick={closeMobileMenu}>Registration Form</a>
        <a href="registration" className="navbar-link h5" onClick={closeMobileMenu}>About Us</a>
        <a href="gallery" className="navbar-link h5" onClick={closeMobileMenu}>Gallery</a>
      </div>
    </nav>
  );
};

export default Navbar;