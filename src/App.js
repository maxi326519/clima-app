import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.scss";

// components
import Home from "./components/Home";
import Nav from "./components/Nav/";
import Cards from "./components/Cards/Cards.jsx";
import MoreDetails from "./components/MoreDetails/index.jsx";
import ErrorAlert from "./components/Others/Errors/Index.jsx";

export default function App() {
  const [darkMode, setDark] = useState({ isActive: false, class: "-light" });
  const error = useSelector((state) => state.cities.error);

  function handleThemeChange() {
    if (darkMode.isActive) setDark({ isActive: false, class: "-light" });
    else setDark({ isActive: true, class: "-dark" });
  }

  return (
    <div className={`App App${darkMode.class}`}>
      <Nav darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Route
        path='/'
        exact
        render={()=>{
          return <Home darkMode={darkMode} handleThemeChange={handleThemeChange}/>
        }}
      />
      <Route
        path='/search'
        render={() => {
          return (
            <div>
              <Cards darkMode={darkMode} />
              <ErrorAlert darkMode={darkMode} error={error} />
            </div>
          )
        }}
      />
      <Route
        path='/details/:id'
        render={()=>{
          return <MoreDetails darkMode={darkMode}/>
        }}
      />
    </div>
  );
}
