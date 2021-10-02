import { FETCH_WEATHER, GET_DATA_WEATHER } from "./types";
import axios from "axios";

export const weatherForecast = (city) => {
  return (dispatch) => {
    dispatch(fetchWeather());

    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=9b2d23e001b4416f900151137212909&days=10&aqi=no&alerts=no&lang=ru&q=${city}`
      )
      .then((res) => {
        dispatch(getWeather(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const fetchWeather = () => ({
  type: FETCH_WEATHER,
});

const getWeather = (data) => ({
  type: GET_DATA_WEATHER,
  payload: {
    ...data,
  },
});
