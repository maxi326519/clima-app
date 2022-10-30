import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";

// components
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import ErrorAlert from "./components/ErrorAlert.jsx";

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
      <Cards darkMode={darkMode} />
      <ErrorAlert darkMode={darkMode} error={error} />
    </div>
  );
}
