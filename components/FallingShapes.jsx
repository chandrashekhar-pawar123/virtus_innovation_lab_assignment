import { useEffect, useState } from "react";
import { Box, Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const FallingShapes = () => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const shapeType = Math.random() > 0.5 ? "box" : "sphere";
      const size = Math.random() * 1.5;
      const position = [Math.random() * 10 - 5, 5, Math.random() * 10 - 5];

      setShapes((prev) => [...prev, { shapeType, size, position }]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {shapes.map((shape, index) => (
        <RigidBody key={index} position={shape.position} type="dynamic">
          {shape.shapeType === "box" ? (
            <Box args={[shape.size, shape.size, shape.size]}>
              <meshStandardMaterial color="orange" />
            </Box>
          ) : (
            <Sphere args={[shape.size]}>
              <meshStandardMaterial color="blue" />
            </Sphere>
          )}
        </RigidBody>
      ))}
    </>
  );
};

export default FallingShapes;

