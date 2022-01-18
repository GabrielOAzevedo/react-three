import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Plane(props: any) {
  const tile = props.tile;
  const tex = useLoader(TextureLoader, `/assets/dungeon/${tile}.png`);

  return (
    <mesh scale={[0.25, 0.25, 1]} {...props}>
      <planeGeometry></planeGeometry>
      <meshStandardMaterial map={tex}></meshStandardMaterial>
    </mesh>
  );
}
