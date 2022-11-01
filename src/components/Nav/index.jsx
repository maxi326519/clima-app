import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getCity } from '../../redux/actions';

import Switch from "../Others/Switch";
import SearchBar from "../SearchBar";

import icon from "../../assets/svg/icon.svg";
import bars from "../../assets/svg/bars.svg";
import arrow from "../../assets/svg/arrow.svg";
import "./Nav.scss";

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
    <nav className="to-bottom">
      <div className={`nav nav${ darkMode.class } width-container`}>
        <div className={`nav-panel ${ options.class }`}>
          <div className='logo to-right'>
            <img className="icon" src={icon} alt='icon'/>
            <h1 className="title">Weather App</h1>
          </div>
          <Link to='/' class='to-bottom'><span>Home</span></Link>
          <Link to='/about' class='to-up'><span>About</span></Link>
          <Switch darkMode={darkMode} handleThemeChange={handleThemeChange} />
        </div>
        <SearchBar darkMode={darkMode} getCity={ city => dispatch(getCity(city)) } />
        <img className="icon options" src={ options.icon } alt='bars' onClick={ handleOptions }/>
      </div>
    </nav>
  );
}