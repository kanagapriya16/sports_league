import React from 'react';
import "../styles/Fixturematches.css";
import Rajastan from "../assest/Rajastan R.png";
import srh from "../assest/srh.png";
import cs from "../assest/cs.png";
import kkr from "../assest/kkr.png";
import kings from "../assest/kings.png";
import rcb from "../assest/rcb.png";
import gujarat from "../assest/gujarat.png";
import lsg from "../assest/lsg.png";
import delhi from "../assest/delhi.png";
import Teams from "../assest/Teams.png";
import mumbai from "../assest/mumbai.png";
import { Divider, Typography } from '@mui/material';

const teamLogos = {
  SUNRISERSHYDRABAD: srh,
  CHENNAISUPERKINGS: cs,
  KOLKATTARIDERS: kkr,
  KINGSPUNJAB: kings,
  DELHICAPITAL: delhi,
  GUJARATTITANS: gujarat,
  LUCkNOWSUPERGIANTS: lsg,
  ROYALSCHALLENGERS: rcb,
};

const matchDetails = [
  {
    teams: ['SUNRISERSHYDRABAD', 'CHENNAISUPERKINGS'],
    date: '2024-fab-15',
    time: '19:00',
    ground: 'MA chithamparam',
  },
  {
    teams: ['KOLKATTARIDERS', 'KINGSPUNJAB'],
    date: '2024-fab-16',
    time: '19:00',
    ground: 'Eden garden',
  },
  {
    teams: ['DELHICAPITAL', 'GUJARATTITANS'],
    date: '2024-fab-17',
    time: '19:00',
    ground: 'NARENDRA MODI STADIUM',
  },
  {
    teams: ['LUCkNOWSUPERGIANTS', 'ROYALSCHALLENGERS'],
    date: '2024-fab-18',
    time: '19:00',
    ground: 'CHINNASWAMY',
  },
  // Add more match details as needed
];

const FxtureMatches = () => {
  return (
    <div className='Fixture container'>
      <div className='upcoming-matches'>
        <Typography textAlign={"start"} justifyContent={"flex-start"} variant="h5" color="black" fontWeight={800} mb={4}>
          Upcoming Matches
        </Typography>
        <div className='match-list'>
          {matchDetails.map((match, index) => (
            <div className='match-card' style={{ display: 'flex', alignItems: 'center' }}>
                 <div className='right-corner-box'>
                <div style={{ height: "0px", width: "100px", position: "absolute", top: 430, left: 40, background: "green", }}>
                  <img src={Teams} alt="Right Corner Logo" style={{ height: "90%", width: "90%" }} />
                </div>
              </div>
              <div className='match-details'>
                <Typography mt={4} mb={2} alignItems={"center"} variant="body2" fontWeight={800} color={"black"} key={index}>
                  {match.date}
                </Typography>
                <div className='teams'>
                  <img style={{ height: "50px", width: "50px" }} src={teamLogos[match.teams[0]]} alt={`${match.teams[0]} Logo`} />
                  <Typography variant='h6' color={"grey"} fontWeight={800}>{match.teams[0]} vs {match.teams[1]}</Typography>
                  <img style={{ height: "50px", width: "50px" }} src={teamLogos[match.teams[1]]} alt={`${match.teams[1]} Logo`} />
                </div>
                <Typography variant="body2" fontWeight={800}>{match.time}</Typography>
                <Divider sx={{
                    width:"95vw"
                }}></Divider>
                <Typography variant="subtitle2" fontWeight={700} color={"grey"}>
                  {match.ground}
                </Typography>
              </div>
           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FxtureMatches;
