import "./App.css";
import Title from "./components/Title";
import Counter from "./components/Counter";
import newYear from "./assets/newYear.png";
import useCountdown from "./hooks/useCountdown";

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2025 00:00:00");

  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${newYear})` }}>
        <div className="container">
          <Title title="Contagem regressiva para 2025" />
          <div className="countdown-container">
            <Counter title="Dias" number={day} />
            <Counter title="Horas" number={hour > 9 ? hour : "0" + hour} />
            <Counter title="Minutos" number={minute > 9 ? minute : "0" + minute}/>
            <Counter title="Segundos"number={second > 9 ? second : "0" + second}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
