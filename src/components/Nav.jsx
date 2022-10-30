import Switch from "./Switch.jsx";
import SearchBar from "./SearchBar.jsx";

import icon from "../assets/svg/icon.svg";
import "./styles/Nav.scss";

export default function Nav({ darkMode, handleThemeChange, onSearch }) {
  return (
    <nav>
      <div className="nav width-container">
        <div className="nav-logo">
          <img className="icon" src={icon} />
          <h1 className="title">Weather App</h1>
        </div>
        <Switch darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <SearchBar darkMode={darkMode} onSearch={onSearch} />
      </div>
    </nav>
  );
}
