import { useSelector, useDispatch } from 'react-redux';
import { removeCity } from '../redux/actions'

import Card from './Card';
import './styles/Cards.scss';

export default function Cards({ darkMode }) {

  const cities = useSelector( state => state.cities )
  const dispatch = useDispatch();

  if(cities.length !== 0){
    return (
      <div className='card-content'>
        {
          cities.map(city =>
            <Card
              darkMode={ darkMode }
              key={ city.id }
              max={ city.max }
              min={ city.min }
              name={ city.name }
              img={ city.img }
              onClose={ ()=>dispatch(removeCity(city.id) )}
              id={ city.id }
            />
          )
        }
      </div>
    )
  }else{
    return(
      <div className="cards-empty"><b className="text">No cities</b>Press "Search"<br></br>to add a city</div>
    )
  }
};