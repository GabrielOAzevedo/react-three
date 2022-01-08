import "./App.css";
import { Canvas } from "@react-three/fiber";
import Plane from "./components/plane";
import { Suspense } from "react";
import data from "./data/terrainmap.json";

function App() {
  return (
    <div className="App">
      <Canvas gl={{ antialias: false }}>
        <Suspense fallback={null}>
          <ambientLight />
          {data.map((row, y) =>
            row.map((item, x) => (
              <Plane
                key={`${y},${x}`}
                position={[
                  0.25 * (x - data.length / 2),
                  0.25 * (y - data.length / 2),
                  0,
                ]}
              ></Plane>
            ))
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
