import React from 'react';
import './styles/Card.scss'

import loading from '../assets/gif/loading.gif'

export default function Card({min, max, name, img, onClose}) {

  return (
    <div className='container-card'>
      <img className='gif' src={ loading }/>
      <div className="card">
        <button className='card__close' onClick={onClose}>x</button>
        <span className='card__name'>{name}</span>
        <div className="card__data">
          <div className="data__climate">
            <span>Min</span>
            <span>{min}</span>
          </div>
          <div className="data__climate">
            <span>Max</span>
            <span>{max}</span>
          </div>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='climate'></img>
        </div>
      </div>
    </div>
  )
};