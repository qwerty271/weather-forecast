import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  function getWeather() {
    return fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=9b2d23e001b4416f900151137212909&q=togliatti&days=10&aqi=no&alerts=no&lang=ru",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    });
  }
  console.log(getWeather());
  return (
    <div className="page">
      <Header />
      <Main />
    </div>
  );
}

export default App;
