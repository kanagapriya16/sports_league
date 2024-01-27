import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../styles/Home.css";
import MuiCardComponent from "./VenuseCard";
import { Card } from "./Card";
import { IconButton } from "@mui/material";
import { CircleRounded, SportsCricketOutlined } from "@mui/icons-material";
import SportsCricket from "@mui/icons-material/SportsCricket";



// Define keyframes for the text animation
const moveText = keyframes`
  0% { margin-top: 0; }
  10% { margin-top: 0; }
  20% { margin-top: -5.62rem; }
  30% { margin-top: -5.62rem; }
  40% { margin-top: -11.24rem; }
  60% { margin-top: -11.24rem; }
  70% { margin-top: -5.62rem; }
  80% { margin-top: -5.62rem; }
  90% { margin-top: 0; }
  100% { margin-top: 0; }
`;

// Styled component for the animated text
const AnimatedText = styled(Typography)`
  padding: 0.25rem 0.75rem;
  height: 2.81rem;
  margin-bottom: 2.81rem;
  display: inline-block;
  animation: ${moveText} infinite;
  background: linear-gradient(90deg, rgba(255, 255, 0, 1) 0%, rgba(255, 255, 255, 1) 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 700; /* Adjusted font weight to 700 */
  font-size: 24px; /* Updated font size to 24px */
  text-align: center;
`;

const Venuses = () => {
  const [activeBox, setActiveBox] = useState(0);

  const handleBoxClick = (index) => {
    setActiveBox(index);
  };

  return (
    <>   
     <main className="container">
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(27,25,50,1) 0%, rgba(25,77,136,1) 0%, rgba(26,27,26,1) 100%, rgba(117,128,130,1) 100%)",
          color: "#e5e5e5",
         fontSize: "20px",
          textTransform: "none",
          fontWeight: 800,
          height: "8vh",
          width: "100%",
          display:"flex",
          flexDirection: "column",
        }}
      >
        <section className="animation">
          <div className="first">
            <AnimatedText style={{
              fontWeight:"900",

              fontSize:"30px"
            }}> Venues</AnimatedText>
          </div>
          <div   className="second">
            <AnimatedText style={{
              fontWeight:"900",

              fontSize:"30px"
            }}>BOOk</AnimatedText>
          </div>
          <div className="third">
            <AnimatedText style={{
              fontWeight:"900",

              fontSize:"30px"
            }}>Your Tickets</AnimatedText>
          </div>
        </section>
      </Box>
     
    </main>
    </>
  );
};

export default Venuses;