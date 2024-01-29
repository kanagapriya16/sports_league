import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../styles/Teammembers.css";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import iscaptain from "..//assest/iscaptain.png";
import batsmans from "..//assest/batsmans.png";
import bowler from "..//assest/bowler.png";
import alrounder from "..//assest/alrounder.png";

const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/get_team_members/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(teamMembers);
  return (
    <div className="table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Player ID</th>
            <th>Player Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((member, index) => (
            <tr
              key={member.player_id}
              className={index % 2 === 0 ? "even-row" : "odd-row"}
            >
              <td>{member.player_id}</td>
              <td>
                {member.player_name}
                {member.is_captain && (
                  <img
                    src={iscaptain}
                    alt="Captain"
                    className="captain-image"
                  />
                )}
              </td>
              <td>
                {member.role}
                {member.role === "Bowler" && (
                  <img
                    src={bowler}
                    alt="Bowler Image"
                    className="captain-image"
                  />
                )}
                {member.role === "Batsman" && (
                  <img
                    src={batsmans}
                    alt="Batsman Image"
                    className="captain-image"
                  />
                )}
                {member.role === "All Rounder" && (
                  <img
                    src={alrounder}
                    alt="All Rounder Image"
                    className="captain-image"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamMembers;
