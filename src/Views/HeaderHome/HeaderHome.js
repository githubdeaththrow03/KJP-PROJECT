import "bootstrap/dist/css/bootstrap.css";
import './HeaderHome.css'

import logo from "../../img/2KLC_logo.png";


function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1 className="header-title">Dive Into Basketball Excellence</h1>
      <p className="header-paragraph">
            At Basketball Excellence, we believe in the power of passion,
          dedication, and teamwork. Join our vibrant community of basketball
          enthusiasts, where you can improve your skills, connect with fellow
          players, and dive into the world of basketball excellence. Whether
          you're a beginner or a seasoned player, our community is here to
          support your journey towards reaching new heights on and off the
          court. Get ready to unleash your potential and make lasting memories
          as part of our basketball family. Let's embark on this exciting
          adventure together!
      </p>
    </header>
  );
}

export default Header;
