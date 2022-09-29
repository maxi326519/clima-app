import React from 'react';
import './styles/Card.css'

export default function Card({min, max, name, img, onClose}) {
  // acá va tu código

/*   function animate(e){

    document.getElementsByClassName("container__card")[1].style.backgroundColor = "red";
    document.getElementsByClassName("container__card")[1].animate(
      [
        {width: "260px"},
        {width: "0px"}
      ],
      {
        duration: 1000,
        iterations: 1,
      }

    );
  } */

  return (
<div className='container__card'>
      <div className="card">
        <button onClick={onClose} className='btn'>X</button>
        <span className='name'>{name}</span>
        <div className="data">
          <div className="climate">
            <span>Min</span>
            <span>{min}</span>
          </div>
          <div className="climate">
            <span>Max</span>
            <span>{max}</span>
          </div>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='climate'></img>
        </div>
      </div>
</div>
  )
};