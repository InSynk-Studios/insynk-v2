import { useState, useEffect } from "react";
import { Cursor } from "../Elements/Cursor/Cursor";

export const FollowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="-ml-11 -mt-10"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
      }}
    >
      <Cursor />
    </div>
  );
};
