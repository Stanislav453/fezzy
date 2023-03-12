import React, { useState } from "react";
import "./Navigation.scss";
import logo from "./logo-fezzy-background-none.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlinePhone } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";


const Navigation = () => {

    const [iconActionSelect, setIconActionSelect] = useState("")

    const iconAction = (action) => {
        if( action === "phone-active" ) {

        }

        if( action === "menu-active" ) {
            setIconActionSelect("menu-active")
        } 

        if( action === "phone-active" ) {
            setIconActionSelect("phone-active")
        } 


    }

    return (
        <nav id="nav" className="container navigation-bg">
            <div className="center-container">
                <div className="navigation-contact">
                    <div className="navigation-contact-box">
                    {
                        iconActionSelect === "menu-active"
                        ? 
                        <VscChromeClose onClick={ () => setIconActionSelect("") } className="mobile-close-icon" /> 
                        :
                        <GiHamburgerMenu onClick={ () => iconAction("menu-active")  } 
                        className="mobile-menu-icon" />
                    }
                        <img className="fezzy-logo" src={logo} alt="fezzy logo" />
                    </div>

                        {/* <AiOutlinePhone className="mobile-phone-icon" /> */}
                    {
                        iconActionSelect === "phone-active"
                        ? 
                        <VscChromeClose onClick={ () => setIconActionSelect("") } className="mobile-close-icon" /> 
                        :
                        <AiOutlinePhone onClick={ () => iconAction("phone-active") } className="mobile-close-icon" />
                    }
                    <div className= {
                        iconActionSelect === "phone-active" 
                        ?
                        "contact-container show-contact-container "
                        :
                        "contact-container"
                    } >
                        <div className="contact-box">
                            <div className="contact-icon">
                                <AiOutlinePhone className="phone-box-icon" />
                            </div>
                            <div className="contact-text">
                                <h4> Mgr.Jiří Helešic: </h4>
                                {/* <h6>Jednatel / Společník </h6> */}
                                <a href="tel:+420777983040">+420 777 983 040</a>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-icon">
                                <AiOutlinePhone className="phone-box-icon" />
                            </div>
                            <div className="contact-text">
                                <h4>Dominik Helešic: </h4>
                                 {/* <h6>Jednatel / Společník </h6> */}

                                <a href="tel:+420777277583">+420 777 277 583</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* NAVIGATION LINK---------------------------------------------------------------------------------------------------- */}
        <div className={
            iconActionSelect === "menu-active" 
            ?
            "container navigation-b show-navigation-b"
            :
            "container navigation-b"
        } >
            <div className="center-container">
                <div className="navigation-link">
                    <ul className="nav-link">
                        <li> 
                            <Link className="link" activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>
                            Domů
                            </Link>
                        </li>
                        <li> 
                            <Link className="link" activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                            O nas
                            </Link>
                        </li>
                        <li> 
                            <Link className="link" activeClass="active" to="service" spy={true} smooth={true} offset={50} duration={500}>
                            Služby
                            </Link>
                        </li>
                        <li> 
                            <Link className="link" activeClass="active" to="gallery" spy={true} smooth={true} offset={50} duration={500}>
                            Naše produkty
                            </Link>
                        </li>
                        <li> 
                            <Link className="link" activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                            Kontakt
                            </Link>
                        </li>
                    </ul>
                    <div className="navigation-link-icon">
                        <a target="_blank" href="https://www.instagram.com/fezzy_s.r.o/?igshid=YmMyMTA2M2Y%3D">
                            <FaInstagram className="link-icon-instagram" />
                    </a>
                    </div>
                </div>
            </div>
        </div>
        </nav>
    )

}

export default Navigation
