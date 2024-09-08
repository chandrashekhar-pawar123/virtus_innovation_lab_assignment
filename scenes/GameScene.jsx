"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Vehicle from "@/components/Vehicle";
import FallingShapes from "@/components/FallingShapes";
import GameOver from "@/components/GameOver";
import { Physics } from "@react-three/rapier";

const GameScene = () => {
  const [isGameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // const handleGameOver = () => setGameOver(true);

  const handleGameOver = async () => {
    setGameOver(true);
    // Calculate score based on game state if needed
    // Example: setScore(calculatedScore);

    // Update score in Supabase
    const { data, error } = await supabase
      .from('scores') // Replace with your table name
      .insert([{ score }]); // Adjust data structure as needed

    if (error) {
      console.error('Error updating score:', error);
    } else {
      console.log('Score updated:', data);
    }
  };

  return (
    <Canvas className="bg-black">
      <Suspense fallback={null}>
        <Physics>
          {!isGameOver && (
            <>
              <Vehicle onGameOver={handleGameOver} />
              <FallingShapes />
            </>
          )}
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default GameScene;



