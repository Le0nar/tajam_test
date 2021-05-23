import Employee from "./employee/Employee";
import "./teams.scss";
import separator from "../../../assets/icons/separator-white.png";
import employeeImg from "../../../assets/employees/employee.png";

const Teams = () => {
    return (
        <section className="teams">
            <div className="container">
                <div className="teams__top">
                    <h2 className="teams__top__title">MEET OUR AMAZING TEAM</h2>
                    <p className="teams__top__info">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
                    <img src={separator} alt="separator" />
                </div>
                <div className="teams__main row">
                    <Employee img={employeeImg} name="SEMF UCUK" profession="CEO &#38; FOUNDER" />
                    <Employee img={employeeImg} name="DIK ADALIN" profession="ENGINEERING" />
                    <Employee img={employeeImg} name="JENG KOL" profession="DESIGNER" />
                    <Employee img={employeeImg} name="PET ROMAK" profession="MARKETING" />
                </div>
                <div className="teams__bottom">
                    <p className="teams__bottom__info">Become part of our dream team, let’s join us !</p>
                    <button className="main-btn teams__bottom__btn">WE ARE HIRING</button>
                </div>
            </div>
        </section>
    )
}

export default Teams;

{/* < Employee /> */}