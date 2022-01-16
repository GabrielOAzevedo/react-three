import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Plane from "../components/plane";
import data from "../data/terrainmap.json";

export default function Map() {
  const mapData = data.map.reverse();
  console.log(mapData);
  return (
    <Canvas gl={{ antialias: false }}>
      <Suspense fallback={null}>
        <ambientLight />
        {mapData.map((row, y) =>
          row.map((item, x) => (
            <Plane
              tile={item}
              key={`${y},${x}`}
              position={[0.25 * (x - row.length / 2), 0.25 * -(y - mapData.length / 2), 0]}
            ></Plane>
          ))
        )}
      </Suspense>
    </Canvas>
  );
}
