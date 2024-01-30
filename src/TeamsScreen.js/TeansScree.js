import React from "react";
import TeamScreenHead from "./TeamsScreenHead";
import "../styles/background/background.css";
import TeamCardList from "./TeamCardList";
export const TeansScree = () => {
  return (
    <div
      className="team-bg"
      style={{
        marginTop: "10%",
      }}
    >
      <TeamScreenHead />

      <TeamCardList />
    </div>
  );
};
