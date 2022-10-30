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

  // Cambiar a Redux ----------------------------------------------------------------------------------------------------
  
  const ciudad = {
    min: 32,
    max: 35,
    img: "03n",
    id: 2172797,
    wind: 3.6,
    temp: 300.15,
    name: "Bueno Aires",
    weather: "Clouds",
    clouds: 40,
    latitud: -16.92,
    longitud: 145.77
  };

  const [cities, setCities] = useState([ciudad]);
  
  function onSearch(ciudad) {
  
    let apiKey = '4ae2636d8dfbdc3044bede63951a019b';

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  // Cambiar a Redux ------------------------------------------------------------------------------------------
  
  return (
    <div className={`App App${darkMode.class}`}>
      <Nav
        darkMode={ darkMode }
        onSearch={ onSearch }
        handleThemeChange={ handleThemeChange }
      />
      <Cards
        darkMode={ darkMode }
        cities={ cities }
        onClose={ onClose }
      />
    </div>
  );
}