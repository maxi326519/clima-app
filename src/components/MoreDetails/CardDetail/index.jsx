import "./CardDetail.scss";

import tempSvg from "../../../assets/svg/details/temp.svg";
import minSvg from "../../../assets/svg/details/min.svg";
import maxSvg from "../../../assets/svg/details/max.svg";

export default function CardDetail({
  darkMode,
  name,
  description,
  icon,
  temp,
  min,
  max,
  pressure,
  humidity,
}) {
  return (
    <div className="card-detail to-right">
      <h1 className="to-bottom">{name}</h1>
      <div className="card-data to-right">
        <span>Pressure: {pressure}</span>
        <span>Humidity: {humidity}</span>
        <span>Description: {description}</span>
      </div>
      <img
        className="to-right"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="climate"
      />
      <div className="card-temp to-up">
        <div className="temp">
          <img src={tempSvg} alt="temp"></img>
          <span className="temp-text-1">
            Temp:
            <br></br>
            <b className="temp-number-1">{temp}º</b>
          </span>
        </div>
        <div className="temp-min-max">
          <div className="temp">
            <img src={minSvg} alt="temp"></img>
            <span className="temp-text">
                Min:
                <br></br>
                <b className="temp-number">{min}º</b>
            </span>
          </div>
          <div className="temp">
            <img src={maxSvg} alt="temp"></img>
            <span className="temp-text">
                Max:
                <br></br>
                <b className="temp-number">{max}º</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
