import React from "react";
import "./dotRing.css";

import useMousePosition from "../../hooks/useMousePosition";

const DotRing = () => {
  const { x, y } = useMousePosition();
  return (
    <>
      <div style={{ left: `${x}px`, top: `${y}px` }} className="ring"></div>

      <div style={{ left: `${x}px`, top: `${y}px` }} className="dot"></div>
    </>
  );
};

export default DotRing;
