import "./contacts.scss";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <h2 className="contacts__title">GIVE US A GOOD NEWS</h2>
        <form className="contacts__form">
            <input type="text" placeholder="Name" className="contacts__form__input"/>
            <input type="email" placeholder="Email" className="contacts__form__input"/>
            <input type="text" placeholder="Subject" className="contacts__form__input"/>
            <textarea placeholder="Your Message" className="contacts__form__text-area" ></textarea>
            <button type="submit" className="main-btn contacts__form__btn">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
