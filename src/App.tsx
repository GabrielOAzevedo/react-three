import "./App.css";
import Cube from "./components/cube";
import Map from "./pages/map";

function App() {
  return (
    <div className="App">
      <Map>
        <Cube scale={[1, 1, 1]} color={"#00ff99"}></Cube>
      </Map>
    </div>
  );
}

export default App;
