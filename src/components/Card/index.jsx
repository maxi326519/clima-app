import { useState } from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

import loading from "../../assets/gif/loading.gif";

export default function Card({ darkMode, min, max, name, img, onClose, id }) {

  const [state, setState] = useState('to-up-px')

  function handleShow(){
    setState('hidden');
    setTimeout(() =>{
      onClose();
    },300)
  }

  return (
    <div className={`container-card container-card${darkMode.class} ${state}`}>
      <img className="gif" src={loading} alt="svg" />
      <div className="card">
        <button className="card__close" onClick={handleShow}>
          x
        </button>
        <span className="card__name to-left">{name}</span>
        <div className="card__data to-right">
          <div className="data__climate">
            <span>Min</span>
            <span>{Math.round(min)} º</span>
          </div>
          <div className="data__climate">
            <span>Max</span>
            <span>{Math.round(max)} º</span>
          </div>
          <img
            className="to-right"
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="climate"
          ></img>
        </div>
        <Link to={`/details/${id}`} className={`btn btn${darkMode.class} to-left`}>
          More
        </Link>
      </div>
    </div>
  );
}
