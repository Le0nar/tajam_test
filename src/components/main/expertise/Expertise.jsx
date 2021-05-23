import "./expertise.scss";
import separator from "../../../assets/icons/separator-grey.png";
import desktop from "../../../assets/icons/desktop.png";
import brush from "../../../assets/icons/brush.png";
import game from "../../../assets/icons/game.png";
import love from "../../../assets/icons/love.png";
import mobile from "../../../assets/icons/mobile.png";
import piechart from "../../../assets/icons/piechart.png";

const Expertise = () => {
  return (
    <section className="expertise">
      <div className="container">
        <div className="expertise__top">
          <h2 className="expertise__top__title">EXPERTISE</h2>
          <p className="expertise__top__info">
            Lorem ipsum dolor sit amet proin gravida nibh vel velit
          </p>
          <img src={separator} alt="separator" />
        </div>
        <div className="expertise__main row">
          <div className="expertise__main__item col-md-4">
            <div>
              <img src={desktop} alt="desktop" />
            </div>
            <p className="expertise__main__item__title">
              WEB DESIGN &#38; DEVELOPMENT
            </p>
            <p className="expertise__main__item__info">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet Aenean.
            </p>
          </div>
          <div className="expertise__main__item col-md-4">
            <div>
              <img src={brush} alt="brush" />
            </div>
            <p className="expertise__main__item__title">BRANDING IDENTITY</p>
            <p className="expertise__main__item__info">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet Aenean.
            </p>
          </div>
          <div className="expertise__main__item col-md-4">
            <div>
              <img src={mobile} alt="mobile" />
            </div>
            <p className="expertise__main__item__title">MOBILE APP</p>
            <p className="expertise__main__item__info">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet Aenean.
            </p>
          </div>
          <div className="expertise__main__item col-md-4">
            <div>
              <img src={piechart} alt="piechart" />
            </div>
            <p className="expertise__main__item__title">
              SEARCH ENGINE OPTIMIZATION
            </p>
            <p className="expertise__main__item__info">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet Aenean.
            </p>
          </div>
          <div className="expertise__main__item col-md-4">
            <div>
              <img src={game} alt="game" />
            </div>
            <p className="expertise__main__item__title">GAME DEVELOPMENT</p>
            <p className="expertise__main__item__info">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet Aenean.
            </p>
          </div>
          <div className="expertise__main__item col-md-4">
            <div>
              <img src={love} alt="love" />
            </div>
            <p className="expertise__main__item__title">MADE WITH LOVE</p>
            <p className="expertise__main__item__info">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet Aenean.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
