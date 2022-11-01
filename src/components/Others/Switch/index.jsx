import { useState, useEffect } from "react";

import './Switch.scss'
import sun from "../../../assets/svg/sun.svg";
import moon from "../../../assets/svg/moon.svg";

export default function Switch({ darkMode, handleThemeChange}) {
  const [svg, setSvg] = useState(sun);

  useEffect(() => {
    darkMode.isActive ? setSvg(moon) : setSvg(sun)
  }, [darkMode]);

  return (
    <div className={`switch switch${darkMode.class}`} onClick={ handleThemeChange }>
      <div className="switch-btn">
        <img src={ svg } alt="svg" />
      </div>
    </div>
  );
}