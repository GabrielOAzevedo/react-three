/* eslint-disable no-restricted-globals */
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const mouseState = {
  isMouseDown: false,
  initialX: 0,
  initialY: 0,
  deltaX: 0,
  deltaY: 0,
};

export default function Cube({ color, scale }: ICubeProps) {
  const ref = useRef<THREE.Mesh>(null);

  function moveListener(e: MouseEvent) {
    if (mouseState.isMouseDown) {
      mouseState.deltaX = mouseState.initialX - e.clientX;
      mouseState.deltaY = mouseState.initialY - e.clientY;
      mouseState.initialX = e.clientX;
      mouseState.initialY = e.clientY;
    }
  }

  function downListener(e: MouseEvent) {
    mouseState.isMouseDown = true;
    mouseState.initialX = e.clientX;
    mouseState.initialY = e.clientY;
  }

  function upListener(e: MouseEvent) {
    mouseState.isMouseDown = false;
    mouseState.deltaX = 0;
    mouseState.deltaY = 0;
  }

  useEffect(() => {
    addEventListener("mousemove", moveListener);
    addEventListener("mousedown", downListener);
    addEventListener("mouseup", upListener);

    return () => {
      removeEventListener("mousemove", moveListener);
      removeEventListener("mousedown", downListener);
      removeEventListener("mouseup", upListener);
    };
  });

  useFrame(() => {
    const rotation = ref?.current?.rotation;
    if (rotation) {
      rotation.x += 0.07 * mouseState.deltaY;
      rotation.y += 0.07 * mouseState.deltaX;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={scale}></boxGeometry>
      <meshStandardMaterial color={color}></meshStandardMaterial>
    </mesh>
  );
}

interface ICubeProps {
  color: any;
  scale: [width: number, height: number, depth: number];
}
