import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Map({ children }: IMapProps) {
  return (
    <Canvas gl={{ antialias: false }}>
      <Suspense fallback={null}>
        <ambientLight />
        {children}
      </Suspense>
    </Canvas>
  );
}

interface IMapProps {
  children: any;
}
