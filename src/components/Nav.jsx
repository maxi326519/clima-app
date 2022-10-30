import Switch from "./Switch.jsx";
import SearchBar from "./SearchBar.jsx";

import "./styles/Nav.scss";

export default function Nav({ darkMode, handleThemeChange, onSearch }) {
  return (
    <nav>
      <div className="nav width-container">
        <h1 className="title">Weather App</h1>
        <Switch darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <SearchBar darkMode={darkMode} onSearch={onSearch} />
      </div>
    </nav>
  );
}
