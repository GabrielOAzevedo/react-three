import "./App.css";
import { Canvas } from "@react-three/fiber";
import Plane from "./components/plane";
import { Suspense } from "react";
import data from "./data/terrainmap.json";

function App() {
  const mapData = data.map.reverse();
  console.log(mapData);
  return (
    <div className="App">
      <Canvas gl={{ antialias: false }}>
        <Suspense fallback={null}>
          <ambientLight />
          {mapData.map((row, y) =>
            row.map((item, x) => (
              <Plane
                tile={item}
                key={`${y},${x}`}
                position={[
                  0.25 * (x - row.length / 2),
                  0.25 * -(y - mapData.length / 2),
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
