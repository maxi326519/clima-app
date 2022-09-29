import React from 'react';
import Card from './Card';
import './styles/Cards.css';

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map\
  console.log(cities);
  if(cities.length !== 0){
    return (
      <div className='card-content'>
        {cities.map(city =>
          <Card
            key={city.id}
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={()=>{onClose(city.id)}}
            id={city.id}
          />
        )}
      </div>
    )
  }else{
    return(
      <div>Sin ciudades</div>
    )
  }
};