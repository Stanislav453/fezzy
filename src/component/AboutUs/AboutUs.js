import "./AboutUs.scss";
import img from "../../img/about-us.webp"
import { GiTrophyCup } from 'react-icons/gi';
import { Fade } from "react-reveal";


export const ABoutUs = () => {
    return (
        <section id="about" className="container about-us-p">
            <div className="center-container">
            <header className="about-us-header ">
                    <h4>O nás</h4>
                    <div className="about-us-underline"></div>
            </header>
                <div className="about-us-item-container">
                    <div className="about-us-left">
                    <div className="about-us-image-container">
                        <img src={img} alt="about us" className="about-us-img" />
                        <div className="about-us-banner">
                            <GiTrophyCup className="about-us-star" />
                            <p>
                               <Fade>Zaměřujeme se především na kvalitu Naši práce.</Fade>
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className="about-us-text-container">
                     <Fade>
                        <p>
                            Využíváme moderní technologii svařování - TIG pro nerezové oceli, ale také používáme i metodu - MIG pro běžné oceli. Vyrábíme z nerezové oceli, a také z běžné oceli. Jsme připraveni zrealizovat velké zakázky, jako je výroba kovových nosníků či krovů, ocelové konstrukce pro bytové domy jako je například zábradlí, přístřešky, garážová stání, nárazová svodidla pro automobily a různé prvky pro potřeby výstavby bytů a domů. Jsme schopni zrealizovat designové prvky v bytových jednotkách a domech, jako jsou například desingové dělící stěny, industriální nábytek a ocelové či nerezové doplňky interiéru dle požadavků zákazníka. Vyrábíme také potrubní systémy.
                        </p>
                    </Fade>  
                    </div>
                </div>
            </div>
        </section>
    )
}