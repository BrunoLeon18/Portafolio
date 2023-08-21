import { useState } from "react";
import "./style/Header.css";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const modeDark = () => {
    if (setDark(!dark)) {
      document.body.classList.toggle("dark-mode");
    } else {
      document.body.classList.toggle("dark-mode");
    }
  };

  const showOpen = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <h1 className="header__logo" >
        <a href="#home">
          <span className="header__logo__primary" data-aos="fade-right">br</span>
          <span className="header__logo__secondary"data-aos="fade-right" data-aos-delay="1000">un</span>
          <span className="header__logo__three"data-aos="fade-right" data-aos-delay="1500">o</span>
        </a>
      </h1>
      <nav className='navbar' >
        <ul className={`navbar__list ${showMenu && 'show--menu'}`}>
          <li className="navbar__list__item" data-aos="fade-up" >
            <a href="#home" onClick={showOpen} >inicio</a>
          </li>
          <li className="navbar__list__item" data-aos="fade-up" data-aos-delay="500">
            <a href="#about" onClick={showOpen}>sobre mi</a>
          </li>
          <li className="navbar__list__item" data-aos="fade-up" data-aos-delay="1000">
            <a href="#projects" onClick={showOpen}>proyectos</a>
          </li>
          <li className="navbar__list__item" data-aos="fade-up" data-aos-delay="1500">
            <a href="#contact">contacto</a>
          </li>
        </ul>
        <button onClick={showOpen} className="menu-responsive" >
          <div className={showMenu &&'show-menu-primary'}></div>
          <div className={showMenu &&'show-menu-second'}></div>
          <div className={showMenu &&'show-menu-three'}></div>
        </button>
        <span className="icon-dark" onClick={modeDark} data-aos="zoom-in">
          {dark ? (
            <i className="bx bxs-moon"></i>
          ) : (
            <i className="bx bxs-sun"></i>
          )}
        </span>
      </nav>
    </header>
  );
};

export default Header;
