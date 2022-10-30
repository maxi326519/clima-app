import React, { useState } from 'react';
import './App.css';

// components
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'

export default function App(){
  const [darkMode, setDark] = useState({ isActive: false, class: '-light' })

  function handleThemeChange(){
    if(darkMode.isActive)
      setDark({ isActive: false, class: '-light' })
    else
      setDark({ isActive: true, class: '-dark' })
  }
  
  return (
    <div className={`App App${darkMode.class}`}>
      <Nav
        darkMode={ darkMode }
        handleThemeChange={ handleThemeChange }
      />
      <Cards
        darkMode={ darkMode }
      />
    </div>
  );
}