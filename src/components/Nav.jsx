import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCity } from '../redux/actions';

import Switch from "./Switch.jsx";
import SearchBar from "./SearchBar.jsx";

import icon from "../assets/svg/icon.svg";
import bars from "../assets/svg/bars.svg";
import arrow from "../assets/svg/arrow.svg";
import "./styles/Nav.scss";

export default function Nav({ darkMode, handleThemeChange }) {

  const dispatch = useDispatch();
  const [ options, setOptions ] = useState({ isActive: false, class: '', icon: bars});

  function handleOptions(){
    console.log('cahnge');
    if(options.isActive)
      setOptions({ isActive: false, class: '', icon: bars});
    else
      setOptions({ isActive: true, class: 'menu', icon: arrow});
  } 

  return (
    <nav>
      <div className={`nav nav${ darkMode.class } width-container`}>
        <div className={`nav-panel ${ options.class }`}>
          <div className='logo'>
            <img className="icon" src={icon} alt='icon'/>
            <h1 className="title">Weather App</h1>
          </div>
          <span>Home</span>
          <span>About me</span>
          <Switch darkMode={darkMode} handleThemeChange={handleThemeChange} />
        </div>
        <SearchBar darkMode={darkMode} getCity={ city => dispatch(getCity(city)) } />
        <img className="icon options" src={ options.icon } alt='bars' onClick={ handleOptions }/>
      </div>
    </nav>
  );
}