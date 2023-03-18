import "./Header.scss";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <header className="header-container">
      <Navigation />
      <div className="header-main-container"></div>
      <div className="header-info">
        <div className="header-info-text">
          <h1>Fezzy s.r.o.</h1>
        </div>
        <div className="header-info-list">
          <ul className="header-info-list-text">
            <li>Kovovýroba - Svařovani</li>
            <li>Svařování nerezu </li>
            <li>Svařování konstrukci </li>
            <li>Zakázková výroba</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
