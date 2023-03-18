import "./MyServices.scss";
import { Parallax } from "react-parallax";
import img from "./servecises-img/service-header.webp";
import { data } from "./data";
import { Fade } from "react-reveal";

export const MyServices = () => {
  return (
    <section id="service" className="container">
      <header className="service-header">
        <Parallax bgImage={img} bgImageAlt="the cat" strength={300}>
          <div className="header-background">
            <h2 className="service-hight-text">služby</h2>
          </div>
        </Parallax>
      </header>
      <div className="center-container">
        <ul className="service-category">
          {data.map((item, key) => {
            const { img, title, desc } = item;
            return (
              <li key={key} className="service-category-item ">
                <div className="category-item-img">
                  <img src={img} alt={title} />
                  <div className="service-banner">
                    <h3>{title}</h3>
                  </div>
                </div>
                <div className="category-item-desc">
                   <p>{desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
