import React, { useEffect, useState } from "react";

import "../../src/styles/Card.css";

const MuiCardComponent = ({ image, title, body1, bounce }) => {
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    if (bounce) {
      setIsBouncing(true);

      const timeoutId = setTimeout(() => {
        setIsBouncing(false);
      }, 1000); // Adjust the duration of the bounce animation

      return () => clearTimeout(timeoutId);
    }
  }, [bounce]);

  return (
    <div className={`card ${isBouncing ? "bounce" : ""}`}>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>

        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          className="card-body"
          src={image}
        />

        <a
          style={{
            fontSize: "15px",

            fontWeight: "700",
            borderBottom: "2px solid #9ebd8e",
            color: "gray",
            textAlign: "center",
          }}
        >
          {" "}
          {body1}{" "}
        </a>
        <p
          style={{
            border: "0.5px solid #9ebd8e",
          }}
          className="button"
        >
          Book Your ground
        </p>
      </div>
    </div>
  );
};

export default MuiCardComponent;
