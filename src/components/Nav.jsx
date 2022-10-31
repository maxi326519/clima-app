import { useDispatch } from 'react-redux';
import { getCity } from '../redux/actions';

import Switch from "./Switch.jsx";
import SearchBar from "./SearchBar.jsx";

import icon from "../assets/svg/icon.svg";
import "./styles/Nav.scss";

export default function Nav({ darkMode, handleThemeChange }) {

  const dispatch = useDispatch();

  return (
    <nav>
      <div className="nav width-container">
        <div className="nav-panel">
          <img className="icon" src={icon} alt='icon'/>
          <h1 className="title">Weather App</h1>
          <Switch darkMode={darkMode} handleThemeChange={handleThemeChange} />
        </div>
        <SearchBar darkMode={darkMode} getCity={ city => dispatch(getCity(city)) } />
      </div>
    </nav>
  );
}