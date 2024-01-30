import React from "react";
import Venuses from "./Venuses";
import Card from "./Card";
import "../styles/venue/ground.css";

export const VenuseScreen = () => {
  return (
    <div className="bg-venues">
      <Venuses />
      <Card bounce={true} />
    </div>
  );
};
