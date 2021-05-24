import "./header.scss";
import logo from "../../assets/logo/logo.png";
import separator from "../../assets/icons/separator.png";
import { useEffect, useState } from "react";
import burger from "../../assets/icons/burger-menu.png";

const Header = () => {
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);

  const closeBurgerMenu = (event) => {
    if(event.target.className !== "header__navbar__burger") setIsBurgerMenuActive(false)
  };

  const burgerMenu = (
    <ul className="burger-menu">
      <li>
        <a className="burger-menu__link burger-menu__link__active" href="#home">
          HOME
        </a>
      </li>
      <li>
        <a className="burger-menu__link" href="#about">
          ABOUT
        </a>
      </li>
      <li>
        <a className="burger-menu__link" href="#expertise">
          EXPERTISE
        </a>
      </li>
      <li>
        <a className="burger-menu__link" href="#teams">
          TEAMS
        </a>
      </li>
      <li>
        <a className="burger-menu__link" href="#works">
          WORKS
        </a>
      </li>
      <li>
        <a className="burger-menu__link" href="#people">
          PEOPLE SAY
        </a>
      </li>
      <li>
        <a className="burger-menu__link" href="#contacts">
          CONTACT
        </a>
      </li>
    </ul>
  );

  return (
    <>
      <header className="header" onClick={closeBurgerMenu}>
        <div className="header__container container">
          <div className="header__navbar">
            <a href="#home" className="header__navbar__logo">
              <img src={logo} alt="logo" />
              <span className="header__navbar__logo__name">tajam</span>
            </a>
            <div>
              <img
                src={burger}
                alt="burger menu"
                className="header__navbar__burger"
                onClick={() => setIsBurgerMenuActive(!isBurgerMenuActive)}
              />
            </div>
            <ul className="header__navbar__nav">
              <li>
                <a
                  className="header__navbar__nav__link header__navbar__nav__link__active"
                  href="#home"
                >
                  HOME
                </a>
              </li>
              <li>
                <a className="header__navbar__nav__link" href="#about">
                  ABOUT
                </a>
              </li>
              <li>
                <a className="header__navbar__nav__link" href="#expertise">
                  EXPERTISE
                </a>
              </li>
              <li>
                <a className="header__navbar__nav__link" href="#teams">
                  TEAMS
                </a>
              </li>
              <li>
                <a className="header__navbar__nav__link" href="#works">
                  WORKS
                </a>
              </li>
              <li>
                <a className="header__navbar__nav__link" href="#people">
                  PEOPLE SAY
                </a>
              </li>
              <li>
                <a className="header__navbar__nav__link" href="#contacts">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="header__main">
            <h1 className="header__main__title col-md-10">
              We Are Awesome Creative Agency
            </h1>
            <img
              src={separator}
              alt="separator"
              className="header__main__separator"
            />
            <p className="header__main__text col-md-10">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit.
            </p>
            <button className="header__main__btn main-btn">LEARN MORE</button>
          </div>
        </div>
      </header>
      {isBurgerMenuActive && burgerMenu}
    </>
  );
};

export default Header;
