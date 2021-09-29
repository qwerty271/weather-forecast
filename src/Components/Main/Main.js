import "./Main.css";
import Card from "../../Components/Card/Card";

function Main() {
  return (
    <section className="main">
      <h2 className="main__title">Прогноз погоды на 10 дней</h2>
      <div className="main__container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Main;
