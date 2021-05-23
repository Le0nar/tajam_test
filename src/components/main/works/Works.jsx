import "./works.scss";
import arrow from "../../../assets/icons/arrow-right.png";
import workExample1 from "../../../assets/works/example1.png"
import workExample2 from "../../../assets/works/example2.png"
import workExample3 from "../../../assets/works/example3.png"
import workExample4 from "../../../assets/works/example4.png"

const Works = () => {
  return (
    <section className="works">
      <div className="works__title container">
        <h2 className="works__title__left">OUR WORKS</h2>
        <a href="#home" className="works__title__right">
          <span className="works__title__right__value">See All Project in dribbble</span>
          <img src={arrow} alt="arrow" />
        </a>
      </div>
      <div className="works__examples">
            <img src={workExample1} alt="workExample1" className="col-md-2" />
            <img src={workExample2} alt="workExample2" className="col-md-2"/>
            <img src={workExample3} alt="workExample3" className="col-md-2"/>
            <img src={workExample4} alt="workExample4" className="col-md-2"/>
            <img src={workExample3} alt="workExample1" className="col-md-2"/>
            <img src={workExample1} alt="workExample2" className="col-md-2"/>
            <img src={workExample2} alt="workExample1" className="col-md-2" />
            <img src={workExample3} alt="workExample2" className="col-md-2"/>
            <img src={workExample4} alt="workExample3" className="col-md-2"/>
            <img src={workExample3} alt="workExample4" className="col-md-2"/>
            <img src={workExample2} alt="workExample1" className="col-md-2"/>
            <img src={workExample3} alt="workExample2" className="col-md-2"/>
      </div>
      <button className="main-btn works__btn">LOAD MORE</button>
    </section>
  );
};

export default Works;
