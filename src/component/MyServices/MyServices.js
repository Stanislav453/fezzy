import "./MyServices.scss";
import { Background, Parallax } from "react-parallax";
import img from "../../img/services-img.webp"
import imgStainless from "../../img/services-stainless.webp"
import imgContruction from "../../img/services-construction-welding.webp"
import fezzyLogo from "../Fotogallery/fezzy-foto-gallery.png"
import { Fade } from "react-reveal";

//

export const MyServices = () => {
    return(
        <section id="service" className="container services-100">
            <Parallax strength={800}>
                <Background className="parallax-bg">
                    <img className="parallax-bg-img" src={img} alt="services-img" />
                </Background>
                    <header id="services" className="text-my-services">
                        <div className="center-container">
                            <h2 className="section-hight-text">
                                služby
                                <img className="section-header-logo" src={fezzyLogo} alt="fezzy-logo" />
                            </h2>
                        </div>
                    </header>
                    <div className="container">
                    <div className="center-container my-services-m">
                        <div className="content-container-my-services">
                            <div className="stainless-welding">
                                <div className="stainless-welding-img">
                                    <img className="stainless-welding-bg" src={imgStainless} alt="stainicless" />
                                    <div className="welding-banner">
                                        <h3 className="welding-banner-text"> Svařování nerezu  </h3>
                                    </div>
                                </div>
                                <ul className="welding-list">
                                     <Fade> <li>  Svařování oceli  </li></Fade>
                                    </ul>
                            </div>
                            <div className="construction-welding">
                                <div className="construction-welding-img">
                                    <img className="stainless-welding-bg" src={imgContruction} alt="stainicless" />
                                    <div className="welding-banner">
                                        <h3 className="welding-banner-text">Svařování konstrukci </h3>
                                    </div>
                                </div>
                                <ul className="welding-list">
                                    <Fade><li> Výroba ocelových konstrukcí  </li></Fade>
                                    <Fade><li>  Výroba zábradlí    </li></Fade>
                                    <Fade><li>  Výroba ochranných svodidel pro firmy   </li></Fade>
                                    <Fade><li>  Výroba nábytku a design prvků    </li> </Fade>
                                    <Fade><li>  Zakázková výroba na míru    </li> </Fade>
   
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
            </Parallax>
        </section>
    )
}