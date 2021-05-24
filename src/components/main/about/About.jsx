import "./about.scss";
import bigLogo from "../../../assets/logo/big-logo.png";
import playImg from "../../../assets/icons/play.png";
import { useState } from "react";
import PopupWindow from "../../popupWindow/PopupWindow";

const About = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row about__info">
            <div className="left col-md-4 about__info__left">
              <img src={bigLogo} alt="logo" />
            </div>
            <div className="rigth col-md-8 about__info__right">
              <h2 className="about__info__right__title">OUR STORY</h2>
              <p className="about__info__right__text">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus
              </p>
              <p className="about__info__right__text">
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                auctor a ornare odio. Sed non mauris vitae erat consequat auctor
                eu in elit. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.
              </p>
              <button className="main-btn">LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className="about__video">
          <div className="about__video__play">
            <img src={playImg} alt="play" className="about__video__play__img" onClick={() => setIsPopupActive(true)}/>
            <span className="about__video__play__text" onClick={() => setIsPopupActive(true)}>WATCH OUR STORY</span>
          </div>
        </div>
        {isPopupActive && <PopupWindow  isPopupActive={isPopupActive} setIsPopupActive={setIsPopupActive} /> }
      </section>
     
    </>
  );
};

export default About;
