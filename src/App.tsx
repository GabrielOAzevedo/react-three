import "./App.css";
import Actor from "./systems/actors/actor";
import Battler from "./systems/actors/battler";
import TurnController from "./systems/turns/turn";

const battlers = [
  new Battler(0, new Actor(10)),
  new Battler(0, new Actor(20)),
  new Battler(0, new Actor(15)),
  new Battler(0, new Actor(1)),
];

function App() {
  const turnController = TurnController(battlers);
  return (
    <div className="App">
      <ol>
        {turnController.battlerList.map((battler, index) => (
          <li key={index}>
            speed: {battler.actor.speed} - {battler.currentInitiative}
          </li>
        ))}
      </ol>
      <p>CurrentTurn: {turnController.currentTurn.actor.speed}</p>
      <button onClick={turnController.endTurn}>Get Turn</button>
    </div>
  );
}

export default App;
