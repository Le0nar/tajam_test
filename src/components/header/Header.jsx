import "./header.scss";
import logo from "../../assets/logo/logo.png";
import separator from "../../assets/icons/separator.png"

const Header = () => {
  // TODO: add burgermenu
  return (
    <header className="header">
      <div className="header__container container">
        <div className="row header__navbar">
          <div className="col-md-2 header__navbar__logo">
            <img src={logo} alt="logo" />
            <span className="header__navbar__logo__name">tajam</span>
          </div>
          <ul className="col-md-8 header__navbar__nav">
            <li>
              <a className="header__navbar__nav__link header__navbar__nav__link__active" href="#home">
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
          <h1 className="header__main__title">
            We Are Awesome Creative Agency
          </h1>
          <img src={separator} alt="separator" className="header__main__separator" />
          <p className="header__main__text">
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit.
          </p>
          {/* TODO: add routing*/}
          <button className="main-btn">LEARN MORE</button>
        </div>
      </div>
    </header>
  );
};

export default Header;