// TeamCard.jsx
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ArrowForward } from "@mui/icons-material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  width: 250,
  height: 300,
  backgroundColor: "#9ebd8e",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  margin: "20px",
  display: "flex",
  flexDirection: "column",
  borderBottom: "3px solid  #3436a8",
  marginTop: "70px",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s ease, background-color 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: "lightblue",
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 230, // Adjust the height as needed
  width: 200, // Adjust the width as needed
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "10%",
});
const TeamCard = ({ id, image, title, body }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard>
      <StyledCardMedia image={image} title={title} />
      <CardContent>
        <Typography
          color="rgb(27,25,50)"
          textAlign="center"
          gutterBottom
          variant="body1"
          fontWeight={800}
          component="div"
        >
          {title}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default TeamCard;
