// Wave.js

import React from "react";
import "../../src/styles/Wave.css"; // Import the corresponding CSS file

const Wave = () => {
  return (
    <div>
      <div className="wave"></div>
      <div
        className="wave"
        style={{ bottom: "-1.25em", animationDuration: "18s" }}
      ></div>
      <div
        className="wave"
        style={{ bottom: "-2.5em", animationDuration: "20s", opacity: 0.9 }}
      ></div>
    </div>
  );
};

export default Wave;
