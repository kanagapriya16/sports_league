// CustomButton.js

import React from "react";
import "./../styles/CricketButton.css";
// Import a CSS file for styling (create this file)

const CustomButton = ({ onClick, label }) => {
  return (
    <div class="parent">
      <button class="btn-gradient-2">{label}</button>
    </div>
  );
};

export default CustomButton;
