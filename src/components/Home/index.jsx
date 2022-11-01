import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLocation, getCity, removeCity } from "../../redux/actions";

import CardDetail from "../MoreDetails/CardDetail";
import Card from "../Card";
import "./Home.scss";

export default function Home({ darkMode, handleThemeChange }) {
  const location = useSelector((state) => state.location);
  const city = useSelector((state) => state.cities.data);
  const [details, setState] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("montaje");
    if (!location.data.hasOwnProperty("city")) {
      dispatch(getLocation());
    } else {
      if (!city.some((city) => city.name === location.data.city)) {
        dispatch(getCity(location.data.city));
      } else {
        setState(city.filter((city) => city.name === location.data.city)[0]);
      }
    }

    if (city.length < 3) {
      console.log("Hay ciudades");
      /*       dispatch(getCity("Mexico"));
      dispatch(getCity("Sydney")); */
    }
  });

  return (
    <div className="home">
      <div className="home-container width-container">
        <div className="text-content to-left">
          <h1 className="to-bottom">Welcome to the Weather App</h1>
          <div className="flex">
            <Link to="/search" className={`btn btn${darkMode.class} show`}>
              Search for city
            </Link>
          </div>

          {(() => {
            if (city.length >= 2) {
              return (
                <div className="cards to-up">
                  <Card
                    darkMode={darkMode}
                    key={city[0].id}
                    max={city[0].main.temp_max}
                    min={city[0].main.temp_min}
                    name={city[0].name}
                    img={city[0].weather[0].icon}
                    id={city[0].id}
                    onClose={() => {
                      console.log("close");
                      dispatch(removeCity(city[0].id));
                    }}
                  />
                  <Card
                    darkMode={darkMode}
                    key={city[1].id}
                    max={city[1].main.temp_max}
                    min={city[1].main.temp_min}
                    name={city[1].name}
                    img={city[1].weather[0].icon}
                    id={city[1].id}
                    onClose={() => {
                      console.log("close");
                      dispatch(removeCity(city[1].id));
                    }}
                  />
                </div>
              );
            }
          })()}
        </div>
        {(() => {
          if (details !== null) {
            return (
              <CardDetail
                darkMode={darkMode}
                name={details.name}
                description={details.weather[0].description}
                icon={details.weather[0].icon}
                temp={Math.round(details.main.temp)}
                min={Math.round(details.main.temp_min)}
                max={Math.round(details.main.temp_max)}
                pressure={details.main.pressure}
                humidity={details.main.humidity}
              />
            );
          }
        })()}
      </div>
    </div>
  );
}
