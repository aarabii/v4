import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={() => false}
        onClick={() => alert("Coming Soon...")}
        className="btn"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Say, Hello...
      </a>
    </div>
  );
};

export default CTA;
