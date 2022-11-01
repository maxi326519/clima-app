import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CardDetail from "./CardDetail/";

import './MoreDetails.scss'

export default function MoreDetails({ darkMode }) {
  const id = Number(useParams().id);
  const details = useSelector((state) =>
    state.cities.data.filter(city => city.id === id )
  )[0];

  return (
    <div className="details">
      <CardDetail
        darkMode={ darkMode }
        name={ details.name }
        description={ details.weather[0].description }
        icon={ details.weather[0].icon }
        temp={ Math.round(details.main.temp) }
        min={ Math.round(details.main.temp_min) }
        max={ Math.round(details.main.temp_max) }
        pressure={ details.main.pressure }
        humidity={ details.main.humidity }
      />
    </div>
  );
}
