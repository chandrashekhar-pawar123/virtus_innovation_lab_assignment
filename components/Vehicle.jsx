"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Cylinder, Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import useKeyPress from "@/components/useKeyPress";
import GameOver from "./GameOver";

const Vehicle = ({ onGameOver }) => {
  const wPressed = useKeyPress("w");
  const sPressed = useKeyPress("s");
  const vehicleRef = useRef();


  useFrame(({ mouse }) => {
    const angle = Math.atan2(mouse.y, mouse.x);
    vehicleRef.current.rotation.y = angle;

    const moveSpeed = 0.1;
    const forwardMovement = wPressed ? moveSpeed : 0;
    const backwardMovement = sPressed ? -moveSpeed : 0;

    if (vehicleRef.current) {
      vehicleRef.current.position.x +=
        (forwardMovement + backwardMovement) * Math.cos(angle);
      vehicleRef.current.position.z +=
        (forwardMovement + backwardMovement) * Math.sin(angle);
    }
  });

  return (
    <>
      <group ref={vehicleRef}>
        <RigidBody type="kinematicPosition">
          <Sphere position={[0, 0.5, 2]} args={[0.5]} />
          <Cylinder position={[-1, 0.25, -1]} args={[0.5, 0.5, 1]} />
          <Cylinder position={[1, 0.25, -1]} args={[0.5, 0.5, 1]} />
          <Box position={[0, 1, 0]} args={[3, 1, 6]} />
        </RigidBody>
      </group>

      <GameOver vehicleRef={vehicleRef} onGameOver={onGameOver} />
    </>
  );
};

export default Vehicle;




