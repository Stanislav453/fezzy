import "./BackToHomeButton.scss";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { useState } from "react";

export const BackToHomeButton = () => {
  const [backToHomeButton, setBackToHomeButton] = useState(false);

  const showButton = () => {

    if (window.scrollY >= 500) {
      setBackToHomeButton(true);
    } else {
      setBackToHomeButton(false);
    }
  };

  window.addEventListener("scroll", showButton);

  //back-to-home-button
  return (
    <button className="back-to-home-button-container">
      <Link
        activeClass="active"
        to="nav"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <IoHomeSharp
          className={
            backToHomeButton
              ? "back-to-home-button back-to-home-button-show"
              : "back-to-home-button"
          }
        />
      </Link>
    </button>
  );
};
