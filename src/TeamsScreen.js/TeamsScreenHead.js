import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Define keyframes for the text animation
const moveText = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0%); }
`;

// Styled component for the animated text
const AnimatedText = styled(Typography)`
  padding: 0.25rem 0.75rem;
  height: 2.81rem;
  margin-bottom: 2.81rem;
  display: inline-block;
  animation: ${moveText} 1s ease-in-out;
  background: linear-gradient(90deg, rgba(255, 255, 0, 1) 0%, rgba(255, 255, 255, 1) 100%);
  -webkit-background-clip: text;
  color: transparent;
  
  font-size: 24px;
`;
const DropdownButton = styled.button`
  background-color: transparent;
  color: white;
  padding: 5px;
  font-size: 16px;
  border: 2px solid white;
  cursor: pointer;
  font-weight:700;
  position: absolute;
  border-radius: 40px; /* Updated border-radius */
  margin-top: 10px; /* Updated margin-top */

  &:hover {
    background: linear-gradient(90deg, rgba(27, 25, 50, 1) 0%, rgba(153, 198, 249, 1) 0%, rgba(26, 27, 26, 1) 100%, rgba(117, 128, 130, 1) 100%);
    border: 2px double lightblue;


  }

  margin-bottom: 10px; /* Added margin-bottom */
`;


const DropdownContent = styled.div`
  display: ${props => (props.open ? "block" : "none")};
  position: absolute;
  top: 100%;
  border-top: 2px solid black;
  background-color: #f9f9f9;
  min-width: 160px;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  color: grey;
  font-size: 15px;
  font-weight: 10;
  text-align: center;

  & > div {
    padding: 8px;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: lightblue;
      color: blue;
    }
  }
`;


const SearchBar = styled.input`
  padding: 5px;
  margin-left: 10px; /* Adjust the margin as needed */
  border: 2px solid white;
  border-radius: 40px; /* Updated border-radius */
  color: white;
  background-color: transparent;
`;
const TeamScreenHead = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setDropdownOpen(false);
    // Additional logic if needed based on the selected year
  };

  const generateYearOptions = () => {
    const years = [];
    for (let year = 2000; year <= 2024; year++) {
      years.push(
        <div key={year} onClick={() => handleYearSelect(year)}>
          {year}
        </div>
      );
    }
    return years;
  };

  return (
    <>
      <main className="container">
        <Box
          sx={{
            position: "relative",
            background:
              "linear-gradient(90deg, rgba(27,25,50,1) 0%, rgba(25,77,136,1) 0%, rgba(26,27,26,1) 100%, rgba(117,128,130,1) 100%)",
            color: "#e5e5e5",
            fontSize: "20px",
            textTransform: "none",
            fontWeight: 800,
            height: "10vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <section className="animation">
            <AnimatedText style={{ fontWeight: "900", fontSize: "30px" }}>
              TEAMS
            </AnimatedText>
          </section>
          <DropdownButton onClick={toggleDropdown}>
            {selectedYear ? `Selected Year: ${selectedYear}` : "Fileter by season"}
          </DropdownButton>
          <DropdownContent open={isDropdownOpen}>
            {generateYearOptions()}
          </DropdownContent>

          
        </Box>
      </main>
    </>
  );
};

export default TeamScreenHead;
