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
  height: 150,

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
  height: 130, // Adjust the height as needed
  width: 100, // Adjust the width as needed
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
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
          <ArrowForward
            fontSize="20px"
            color="blue"
            sx={{
              verticalAlign: "middle",
              marginLeft: "30px",
              transition: "transform 0.3s ease",
              fontWeight: "800",
            }}
            onClick={handleExpandClick}
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default TeamCard;
