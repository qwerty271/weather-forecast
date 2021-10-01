import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useDispatch } from "react-redux";
import { weatherForecast } from "../../redux/actions";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(weatherForecast("togliatti"));
  });

  return (
    <div className="page">
      <Header />
      <Main />
    </div>
  );
}

export default App;
