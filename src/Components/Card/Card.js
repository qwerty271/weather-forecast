import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <ul className="card__list">
        <li className="card__day">{props.day}</li>
        <li className="card__date">{props.date}</li>
        <li className="card__item">
          <img className="card__icon" alt="Погода" src={props.icon} />
        </li>
        <li className="card__temperature">
          {props.maxTemp}&deg;{" "}
          <span className="card__temperature_value">{props.minTemp}&deg;</span>
        </li>
        <li className="card__weather">{props.weather}</li>
      </ul>
    </div>
  );
}

export default Card;
