import "./Navigation.scss";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillPhone, AiOutlineClose } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

export const Navigation = () => {
  //HOOKS
  const [iconActionSelect, setIconActionSelect] = useState("");

  //ICON ACTION FUNCTION
  const iconAction = (action) => {
    if (action === "menu-active") {
      setIconActionSelect("menu-active");
    }

    if (action === "phone-active") {
      setIconActionSelect("phone-active");
    }
  };

  // NAVIGATION
  return (
    <nav id="nav" className="navigation-container">
      <div className="navigation-top">
        <div className="center-container navigation-top-content">
          <div className="mobile-nav-icon">
            {iconActionSelect === "menu-active" ? (
              <button>
                <AiOutlineClose
                  className="mobile-icon"
                  onClick={() => setIconActionSelect()}
                />
              </button>
            ) : (
              <button>
                <GiHamburgerMenu
                  className="mobile-icon"
                  onClick={() => iconAction("menu-active")}
                />
              </button>
            )}
          </div>
          <div className="mobile-nav-icon">
            {iconActionSelect === "phone-active" ? (
              <button>
                <AiOutlineClose
                  className="mobile-icon"
                  onClick={() => setIconActionSelect()}
                />
              </button>
            ) : (
              <button>
                <AiFillPhone
                  className="mobile-icon"
                  onClick={() => iconAction("phone-active")}
                />
              </button>
            )}
          </div>
          <ul
            className={
              iconActionSelect === "phone-active"
                ? "navigation-top-list navigation-top-list-show"
                : "navigation-top-list"
            }
          >
            <li>
              <AiFillPhone className="phone-box-icon" />
              <h4>Dominik Helešic:</h4>
              <a href="tel:+420777277583">+420 777 277 583</a>
            </li>
            <li>
              <AiFillPhone className="phone-box-icon" />
              <h4> Mgr.Jiří Helešic: </h4>
              <a href="tel:+420777983040">+420 777 983 040</a>
            </li>
          </ul>
          <div className="navigation-link-icon">
            <a
              target="_blank"
              href="https://www.instagram.com/fezzy_s.r.o/?igshid=YmMyMTA2M2Y%3D"
            >
              <FaInstagram className="link-icon-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          iconActionSelect === "menu-active"
            ? "navigation-bottom navigation-bottom-show"
            : "navigation-bottom"
        }
      >
        <div className="center-container">
          <ul className="navigation-link">
            <li>
              <Link
                className="link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Domů
              </Link>
            </li>
            <li>
              <Link
                className="link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                O nas
              </Link>
            </li>
            <li>
              <Link
                className="link"
                activeClass="active"
                to="service"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Služby
              </Link>
            </li>
            <li>
              <Link
                className="link"
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Naše produkty
              </Link>
            </li>
            <li>
              <Link
                className="link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div className="navigation-bottom-icon">
          <a
            target="_blank"
            href="https://www.instagram.com/fezzy_s.r.o/?igshid=YmMyMTA2M2Y%3D"
          >
            <FaInstagram className="navigation-bottom-icon-instagram" />
          </a>
        </div>
      </div>
    </nav>
  );
};
