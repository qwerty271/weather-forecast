import "./Header.css";
import icon_partly_cloudy from "../../images/icon_partly_cloudy.png";

function Header() {
  return (
    <header className="header">
      <ul className="header__list-loaction">
        <li className="header__list-loaction_item">Тольятти</li>
        <li className="header__list-loaction_item">Понедельник, 20:00</li>
        <li className="header__list-loaction_item">Переменная облачность</li>
      </ul>
      <p className="header_change-city">Выбрать город</p>
      <div className="header__container">
        <p className="header__container_temperature">+6</p>
        <img
          className="header__container_icon"
          alt="Погода"
          src={icon_partly_cloudy}
        />
        <ul className="header__list-forecast">
          <li className="header__list-forecast_item">
            Вероятность осадков:{" "}
            <span className="header__list-forecast_value">0%</span>
          </li>
          <li className="header__list-forecast_item">
            Влажность: <span className="header__list-forecast_value">48%</span>
          </li>
          <li className="header__list-forecast_item">
            Ветер: <span className="header__list-forecast_value">5 м/с</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
