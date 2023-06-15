import React from "react";
import "../styles/dotRing.css";

import useMousePosition from "../hooks/useMousePosition";

const DotRing = () => {
  const { x, y } = useMousePosition();
  return (
    <>
      <div style={{ left: `${x}px`, top: `${y}px` }} className="ring_cursor"></div>

      <div style={{ left: `${x}px`, top: `${y}px` }} className="dot"></div>
    </>
  );
};

export default DotRing;
