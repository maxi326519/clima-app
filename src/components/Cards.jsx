import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { removeCity } from '../redux/actions'

import Card from './Card';
import ErrorAlert from './ErrorAlert';
import './styles/Cards.scss';

export default function Cards({ darkMode }) {

  const cities = useSelector( state => state.cities )
  const dispatch = useDispatch();

  if(cities.data.length !== 0){
    return (
      <div className='card-content'>
        {
          cities.data.map(city =>{
            return (
              <Card
                darkMode={ darkMode }
                key={ city.id }
                max={ city.main.temp_max }
                min={ city.main.temp_min }
                name={ city.name }
                img={ city.weather[0].icon }
                id={ city.id }
                onClose={ () =>{ console.log('close'); dispatch(removeCity(city.id) )}}
              />
            )
          })
        }
      </div>
    )
  }else{
    return(
      <div>
        <div className="cards-empty"><b className="text">No cities</b>Press "Search"<br></br>to add a city</div>
      </div>      
    )
  }
};