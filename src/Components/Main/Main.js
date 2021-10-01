import "./Main.css";
import Card from "../../Components/Card/Card";
import { connect } from "react-redux";

function Main(props) {
  const months = [
    " Января",
    " Февраля",
    " Марта",
    " Апреля",
    " Мая",
    " Июня",
    " Июля",
    " Августа",
    " Сентября",
    " Октября",
    " Ноября",
    " Декабря",
  ];
  const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  function formatDate(date) {
    const dateArray = date.split("-");
    if (date) {
      const month = dateArray[1].replace(/^0+/, "");
      const day = dateArray[2].replace(/^0+/, "");
      return day + months[month];
    }
  }

  function formatDay(number) {
    const day = new Date().getDay();
    if (day === 6 && number === 1) {
      return 0;
    } else if (day < 6 && number === 1) {
      return day + 1;
    } else if (day === 5 && number === 2) {
      return 0;
    } else if (day === 6 && number === 2) {
      return 1;
    } else if (day < 5 && number === 2) {
      return day + 2;
    }
  }

  return (
    <section className="main">
      <h2 className="main__title">Прогноз погоды на 3 дня</h2>
      <div className="main__container">
        <Card
          day={"Сегодня"}
          date={formatDate(
            Object.keys(props.data).length !== 0
              ? props.data.forecast.forecastday[0].date
              : ""
          )}
          icon={
            Object.keys(props.data).length !== 0
              ? props.data.forecast.forecastday[0].day.condition.icon
              : ""
          }
          maxTemp={
            Object.keys(props.data).length !== 0
              ? props.data.forecast.forecastday[0].day.maxtemp_c > 0
                ? "+" +
                  Math.round(props.data.forecast.forecastday[0].day.maxtemp_c)
                : "-" +
                  Math.round(props.data.forecast.forecastday[0].day.maxtemp_c)
              : ""
          }
          minTemp={
            Object.keys(props.data).length !== 0
              ? props.data.forecast.forecastday[0].day.mintemp_c > 0
                ? "+" +
                  Math.round(props.data.forecast.forecastday[0].day.mintemp_c)
                : "-" +
                  Math.round(props.data.forecast.forecastday[0].day.mintemp_c)
              : ""
          }
          weather={
            Object.keys(props.data).length !== 0
              ? props.data.forecast.forecastday[0].day.condition.text
              : ""
          }
        />

        <Card
          day={days[formatDay(1)]}
          date={formatDate(
            Object.keys(props.data).length !== 0
              ? props.data.forecast.forecastday[1].date
              : ""
          )}
          icon={
            Object.keys(props.data).length !== 0
              ? props.data.forecast.forecastday[1].day.condition.icon
              : ""
          }
          maxTemp={
            Object.keys(props.data).length !== 0
              ? props.data.forecast.forecastday[1].day.maxtemp_c > 0
                ? "+" +
                  Math.round(props.data.forecast.forecastday[1].day.maxtemp_c)
                : "-" +
                  Math.round(props.data.forecast.forecastday[1].day.maxtemp_c)
              : ""
          }
          minTemp={
            Object.keys(props.data).length !== 0
              ? props.data.forecast.forecastday[1].day.mintemp_c > 0
                ? "+" +
                  Math.round(props.data.forecast.forecastday[1].day.mintemp_c)
                : "-" +
                  Math.round(props.data.forecast.forecastday[1].day.mintemp_c)
              : ""
          }
          weather={
            Object.keys(props.data).length !== 0
              ? props.data.forecast.forecastday[1].day.condition.text
              : ""
          }
        />

        <Card
          day={days[formatDay(2)]}
          date={formatDate(
            Object.keys(props.data).length !== 0
              ? props.data.forecast.forecastday[2].date
              : ""
          )}
          icon={
            Object.keys(props.data).length !== 0
              ? props.data.forecast.forecastday[2].day.condition.icon
              : ""
          }
          maxTemp={
            Object.keys(props.data).length !== 0
              ? props.data.forecast.forecastday[2].day.maxtemp_c > 0
                ? "+" +
                  Math.round(props.data.forecast.forecastday[2].day.maxtemp_c)
                : "-" +
                  Math.round(props.data.forecast.forecastday[2].day.maxtemp_c)
              : ""
          }
          minTemp={
            Object.keys(props.data).length !== 0
              ? props.data.forecast.forecastday[2].day.mintemp_c > 0
                ? "+" +
                  Math.round(props.data.forecast.forecastday[2].day.mintemp_c)
                : "-" +
                  Math.round(props.data.forecast.forecastday[2].day.mintemp_c)
              : ""
          }
          weather={
            Object.keys(props.data).length !== 0
              ? props.data.forecast.forecastday[2].day.condition.text
              : ""
          }
        />
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return { data: state };
}

export default connect(mapStateToProps)(Main);
