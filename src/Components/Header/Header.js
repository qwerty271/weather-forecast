import React from "react";
import "./Header.css";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { weatherForecast } from "../../redux/actions";

function Header(props) {
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const day = new Date().getDay();
  const [popupVisible, setPopupVisible] = React.useState(false);
  const dispatch = useDispatch();

  function changeCity() {
    setPopupVisible(true);
  }

  function chooseCity(city) {
    dispatch(weatherForecast(city));
    setPopupVisible(false);
  }

  return (
    <header className="header">
      <ul className="header__list-loaction">
        <li className="header__list-loaction_item">
          {Object.keys(props.data).length !== 0 ? props.data.location.name : ""}
        </li>
        <li className="header__list-loaction_item">
          {days[day] +
            ",  " +
            new Date().getHours() +
            ":" +
            new Date().getMinutes()}
        </li>
        <li className="header__list-loaction_item">
          {Object.keys(props.data).length !== 0
            ? props.data.current.condition.text
            : ""}
        </li>
      </ul>
      <p className="header_change-city" onClick={changeCity}>
        Выбрать город
      </p>
      <div className="header__container">
        <p className="header__container_temperature">
          {Object.keys(props.data).length !== 0
            ? props.data.current.temp_c > 0
              ? "+" + Math.round(props.data.current.temp_c)
              : "-" + Math.round(props.data.current.temp_c)
            : ""}
        </p>
        <img
          className="header__container_icon"
          alt="Погода"
          src={
            Object.keys(props.data).length !== 0
              ? props.data.current.condition.icon
              : ""
          }
        />
        <ul className="header__list-forecast">
          <li className="header__list-forecast_item">
            Вероятность осадков:{" "}
            <span className="header__list-forecast_value">
              {Object.keys(props.data).length !== 0
                ? props.data.forecast.forecastday[0].hour[new Date().getHours()]
                    .chance_of_rain
                : ""}
              %
            </span>
          </li>
          <li className="header__list-forecast_item">
            Влажность:{" "}
            <span className="header__list-forecast_value">
              {Object.keys(props.data).length !== 0
                ? props.data.forecast.forecastday[0].day.avghumidity
                : ""}
              %
            </span>
          </li>
          <li className="header__list-forecast_item">
            Ветер:{" "}
            <span className="header__list-forecast_value">
              {Object.keys(props.data).length !== 0
                ? Math.round(
                    props.data.forecast.forecastday[0].hour[
                      new Date().getHours()
                    ].gust_kph / 3.6
                  )
                : ""}{" "}
              м/с
            </span>
          </li>
        </ul>
      </div>
      <section className={`popup ${popupVisible ? "popup_active" : ""}`}>
        <ul className="popup__list">
          <li
            className="popup__list_item"
            onClick={() => chooseCity("togliatti")}
          >
            Тольятти
          </li>
          <li className="popup__list_item" onClick={() => chooseCity("moscow")}>
            Москва
          </li>
          <li className="popup__list_item" onClick={() => chooseCity("samara")}>
            Самара
          </li>
        </ul>
      </section>
    </header>
  );
}

function mapStateToProps(state) {
  return { data: state };
}

export default connect(mapStateToProps)(Header);
