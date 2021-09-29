import "./Card.css";
import icon_partly_cloudy from "../../images/icon_partly_cloudy.png";

function Card() {
  return (
    <div className="card">
      <ul className="card__list">
        <li className="card__day">Сегодня</li>
        <li className="card__date">29 сентября</li>
        <li className="card__item">
          <img className="card__icon" alt="Погода" src={icon_partly_cloudy} />
        </li>
        <li className="card__temperature">
          +12&deg; <span className="card__temperature_value">+4&deg;</span>
        </li>
        <li className="card__weather">Переменная облачность</li>
      </ul>
    </div>
  );
}

export default Card;
