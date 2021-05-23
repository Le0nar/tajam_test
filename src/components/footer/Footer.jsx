import "./footer.scss";
import logo from "../../assets/logo/logo.png";
import phone from "../../assets/icons/phone.png";
import location from "../../assets/icons/location.png";
import paper from "../../assets/icons/paper.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import dribble from "../../assets/icons/dribble.png";
import inst from "../../assets/icons/inst.png";
import googlePlus from "../../assets/icons/google-plus.png";
import youtube from "../../assets/icons/youtube.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer__main">
          <div className="footer__main__left col-md-4">
            <a href="#home" className="footer__main__left__logo">
              <img src={logo} alt="logo" />
              <span className="footer__main__left__logo__name">tajam</span>
            </a>
            <p className="footer__main__left__info">
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare
              odio non mauris vitae erat in elit
            </p>
          </div>
          <div className="footer__main__middle col-md-4">
            <h4 className="footer__main__title">OUR STUDIO</h4>
            <a
              href="https://www.google.com/maps/place/%D0%A7%D0%B5%D0%BA%D0%B5%D1%80%D0%B8%D0%BB/@56.7930482,53.0462189,1266m/data=!3m1!1e3!4m12!1m6!3m5!1s0x43e138da832b617f:0xb71b67466c5d6baa!2z0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC30L7QvtC70L7Qs9C40YfQtdGB0LrQuNC5INC_0LDRgNC6INCj0LTQvNGD0YDRgtC40Lg!8m2!3d56.8655369!4d53.1741179!3m4!1s0x0:0x965648a13b8941fa!8m2!3d56.7954087!4d53.0460531"
              className="footer__main__middle__contacts footer__main__middle__address"
            >
              <div>
                <img src={location} alt="location" />
              </div>
              <p className="footer__main__middle__contacts__info">
                Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres -
                Jakarta Barat 11480 - Indonesia
              </p>
            </a>
            <a
              href="tel:622122243333"
              className="footer__main__middle__contacts"
            >
              <div>
                <img src={phone} alt="location" />
              </div>
              <p className="footer__main__middle__contacts__info">
                (+62) 21-2224 3333
              </p>
            </a>
          </div>
          <div className="footer__main__right col-md-4">
            <h4 className="footer__main__title">STAY IN TOUCH</h4>
            <form className="footer__main__right__form">
              <input
                type="email"
                className="footer__main__right__form__email"
                placeholder="Subscribe our newsletter"
              />
              <div className="footer__main__right__form__btn">
                <img src={paper} alt="send" />
              </div>
            </form>
            <div className="footer__main__right__social-networks">
              <a href="#home">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#home">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#home">
                <img src={dribble} alt="dribble" />
              </a>
              <a href="#home">
                {" "}
                <img src={inst} alt="inst" />
              </a>
              <a href="#home">
                {" "}
                <img src={googlePlus} alt="google+" />
              </a>
              <a href="#home">
                <img src={youtube} alt="youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="row footer__bottom">
          <ul className="footer__bottom__left col-md-4">
            <li>
              <a href="#home" className="footer__bottom__left__link">HELP</a>
            </li>
            <li>
              <a href="#home" className="footer__bottom__left__link">TERMS &#38; CONDITION</a>
            </li>
            <li>
              <a href="#home" className="footer__bottom__left__link">PRIVACY</a>
            </li>
          </ul>
          <p className="footer__bottom__right col-md-4">
            Copyright © 2015 - Tajem Creative
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
