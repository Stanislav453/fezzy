import "./ContactBar.scss";
import { AiTwotonePhone} from 'react-icons/ai';
import { SiGmail} from 'react-icons/si';
import { IoLocationSharp} from 'react-icons/io5';
import { IoInformationCircleSharp } from 'react-icons/io5';


export const ContactBar = () => {
    return (
        <section id="contact" className="container contact-bar-bg">
            <div className="center-container">
                <div className="content-container-bar">
                    <div className="content-container-left">
                        <header className="content-container-header">
                            <h2>Kontakt</h2>
                        </header>
                        <article className="contact-container-text">
                            <h3 className="contact-container-hight-text"><AiTwotonePhone /> Zavolejte nám</h3>
                            <div className="contact-bar">
                                <strong>Jiří Helešic: </strong> 
                                <a href="tel:+420 777 983 040">+420 777 983 040</a> 
                            </div>
                            <div className="contact-bar">
                                <strong>Dominik Helešic: </strong> 
                                <a href="tel:+420 777 277 583">+420 777 277 583</a> 
                            </div>
                        </article>
                        <article className="contact-container-text">
                            <h3 className="contact-container-hight-text"><SiGmail /> Napište nam</h3>
                            <div className="contact-bar">
                                <strong>Jiří Helešic: </strong> 
                                <a href="mailto:jirihelesic@fezzy.cz ">jirihelesic@fezzy.cz </a> 
                            </div>
                            <div className="contact-bar">
                                <strong>Dominik Helešic: </strong> 
                                <a href="mailto:dominikhelesic@fezzy.cz">dominikhelesic@fezzy.cz</a> 
                            </div>
                            <div className="contact-bar">
                                <strong>Firemní email: </strong> 
                                <a href="mailto:info@fezzy.cz">info@fezzy.cz</a> 
                            </div>
                        </article>
                        <article className="contact-container-text">
                            <h3 className="contact-container-hight-text"><IoLocationSharp /> Adresa</h3>
                            <div className="contact-bar">
                                <strong>Adresa podnikání:</strong> 
                                <span className="contact-bar-text"> Praha 5, 150 00, Brožíkova 281/6</span>
                            </div>
                            <div className="contact-bar">
                                <strong>Adresa provozovna:</strong> 
                                <span className="contact-bar-text"> Újezd (u Vodňan) 104</span>
                            </div>
                        </article>
                        <article className="contact-container-text">
                            <h3 className="contact-container-hight-text"> <IoInformationCircleSharp /> Ostatní informace</h3>
                            <div className="contact-bar">
                                <strong>IČO: </strong> 
                                <span className="contact-bar-text"> 04389930</span>
                            </div>
                            <div className="contact-bar">
                                <strong>DIČ:</strong> 
                                <span className="contact-bar-text"> CZ04389930</span>
                            </div>
                        </article>
                    </div>
                    <div className="content-container-right">
                        <div className="content-container-right-item">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.590251302835!2d14.196507537813371!3d49.126194512224494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4774ab58d6f37d91%3A0x805fb05ebd5d06c!2zw5pqZXpkLCAzODkgMDEgVm9kxYhhbnksIMSMZXNrbw!5e0!3m2!1ssk!2ssk!4v1676313965264!5m2!1ssk!2ssk" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}