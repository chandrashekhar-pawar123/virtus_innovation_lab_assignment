"use client";

import { useRapier } from "@react-three/rapier";
import { useEffect } from "react";

const GameOver = ({ vehicleRef, onGameOver }) => {
  const { world } = useRapier();
  useEffect(() => {
    if (world && vehicleRef.current) {
      const shapes = world.getRigidBody(); 
      const vehicle = vehicleRef.current;

      console.log("Shapes:", shapes);

      if (shapes && Array.isArray(shapes)) {
        shapes.forEach((shape) => {
          const distance = vehicle.position.distanceTo(shape.position);
          if (distance < 1) {  // Adjust collision distance as needed
            console.log("Collision detected!");
            onGameOver();
          }
        });
      } else {
        console.error("shapes is not an array or iterable:", shapes);
      }
  }
  else {
    console.error("World is not initialized or vehicleRef is null");
  }

  }, [world, vehicleRef, onGameOver]);

  return null;
};

export default GameOver;




