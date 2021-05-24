import { useEffect } from "react";
import "./popupWindow.scss";

const PopupWindow = ({ setIsPopupActive }) => {

   useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "visible";
    };
   }, [] )

   const closePopup = (event) => {
    if(event.target) setIsPopupActive(false)
   }

  return (
    <div className="popup__overlay" onClick={closePopup}>
      <iframe
        title="about company"
        className="popup__overlay__video"
        src="https://www.youtube.com/embed/KvUgaHTNit4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default PopupWindow;
