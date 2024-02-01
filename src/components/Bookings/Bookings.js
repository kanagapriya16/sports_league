import React, { useEffect, useState } from "react";


import srh from "../../assest/srh.png";
import cs from "../../assest/cs.png";
import kkr from "../../assest/kkr.png";
import kings from "../../assest/kings.png";
import rcb from "../../assest/rcb.png";
import gujarat from "../../assest/gujarat.png";
import lsg from "../../assest/lsg.png";
import delhi from "../../assest/delhi.png";

import mumbai from "../../assest/mumbai.png";
import rr from "../../assest/Rajastan R.png";
import { Typography } from "@mui/material";
import "../../styles/Bookings/Bookings.css"

const teamLogos = {
    SRH: srh,
    CSK: cs,
    KKR: kkr,
    PBKS: kings,
    DC: delhi,
    GT: gujarat,
    LSG: lsg,
    RCB: rcb,
    RR: rr,
    MI: mumbai,
};

const Bookings = () => {
    const [data, setData] = useState([]);
    const handleClick = () => {
       


        
      }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/get_all_match_schedules", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    console.log(data);
    return (
        <div className="Fixturecontainers">
            <div className="upcoming-matchess">
                <div >
                    {data.map((match, index) => (
                        <div className="match-cards" style={{ alignItems: "center" }} >
                            <div>
                                <Typography
                                    mt={7}
                                    mb={2}
                                    alignItems={"center"}
                                    variant="body2"
                                    fontWeight={800}

                                    key={index}
                                >
                                    Date: {match.match_day}
                                </Typography>
                                <div className="teams">
                                    <img
                                        style={{ height: "50px", width: "50px", marginLeft: "20%" }}
                                        src={teamLogos[match.team1]}
                                        alt={match.team1}
                                    />
                                    <Typography
                                        ml={7}
                                        align="center"
                                        textAlign={"center"}
                                        variant="h6"

                                        fontWeight={800}
                                    >
                                        {match.team1} vs {match.team2}
                                    </Typography>
                                    <img
                                        style={{
                                            height: "50px",
                                            width: "50px",
                                            marginRight: "20%",
                                        }}
                                        src={teamLogos[match.team2]}
                                        alt={match.team2}
                                    />
                                </div>
                                <Typography
                                    variant="body2"
                                    fontWeight={800}
                                    alignItems={"center"}
                                >
                                    Time: {match.start_time}-{match.end_time}
                                </Typography>

                                <Typography
                                    alignItems={"center"}
                                    variant="subtitle2"
                                    fontWeight={700}

                                >
                                    Venue: {match.venue}
                                </Typography>
                            </div>
                            <button className="animated-button1" onClick={handleClick}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Book Tickets</button>  
                        </div>
                     
                    ))}
                     

                                   
                </div>
            </div>
        </div>
    );
};

export default Bookings;