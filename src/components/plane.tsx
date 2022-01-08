import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Plane(props: any) {
  const tex = useLoader(TextureLoader, "/assets/floor.png");
  return (
    <mesh scale={[0.25, 0.25, 0.25]} {...props}>
      <planeGeometry></planeGeometry>
      <meshStandardMaterial
        map={tex}
      ></meshStandardMaterial>
    </mesh>
  );
}
