import React from 'react';
import { Typography, Avatar, Box, TableCell, TableRow, TableHead, TableBody, Table, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTrail, animated } from 'react-spring';
import cs from "../assest/cs.png";
import delhi from "../assest/delhi.png";
import kings from "../assest/kings.png";
import kkr from "../assest/kkr.png";
import rcb from "../assest/rcb.png";
import srh from "../assest/srh.png";
import { SportsCricketOutlined } from '@mui/icons-material';

export default function DataTable() {
  // Sample data array
  const data = [
    {
      name: 'CSK',
      stadium: 'Chennai Stadium',
      visit: 'CSK visit',
      image: cs,
    },
    {
      name: 'Delhi Capitals',
      stadium: 'Delhi Stadium',
      visit: 'Delhi visit',
      image: delhi,
    },
    {
      name: 'Kings XI Punjab',
      stadium: 'Punjab Stadium',
      visit: 'KXIP visit',
      image: kings,
    },
    {
      name: 'KKR',
      stadium: 'Kolkata Stadium',
      visit: 'KKR visit',
      image: kkr,
    },
    {
      name: 'RCB',
      stadium: 'Bangalore Stadium',
      visit: 'RCB visit',
      image: rcb,
    },
    {
      name: 'SRH',
      stadium: 'Hyderabad Stadium',
      visit: 'SRH visit',
      image: srh,
    },
    // Add more data objects as needed
  ];

  const trail = useTrail(data.length, {
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-50px)' },
    config: { tension: 300, friction: 10 },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '10px',
        maxWidth: '100%',
        width: '100%',
        padding: '1rem',
        backgroundColor: 'rgb(255, 255, 255)',
      }}
    >
      <Typography
        sx={{ '@media(max-width:479px)': { fontSize: '80px', fontWeight: 900 } }}
        variant="h4" fontWeight={700}  
      >
        All-time Indian Premier League Teams
      </Typography>

      <Box sx={{ width: '100%', overflow: 'auto' }}>
        <Table sx={{ display: 'table', borderCollapse: 'collapse', width: '100%' }}>
          <TableHead sx={{ display: 'table-header-group' }}>
            <TableRow
              sx={{
                display: 'table-row',
                borderBottom: '1px solid rgb(105,110,124)',
              }}
            >
              <TableCell
                sx={{
                  padding: '10px 15px',
                  display: 'table-cell',
                  width: '35%',
                }}
              >
                <Typography color={"#3a2a54"} fontWeight={600} >
                  Teams
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                    padding: '10px 15px',
                  display: 'table-cell',
                  width: '35%',
                }}
              >
                <Typography color={"#3a2a54"} fontWeight={600} sx={{ '@media(max-width:479px)': { fontSize: '17px' } }} >
                  Stadium
                </Typography>
              </TableCell>
              <TableCell
                color={'gray'}
                fontWeight={800}
                sx={{
                    padding: '10px 15px',
                  display: 'table-cell',
                  width: '30%',
                }}
              >
                <Typography color={"#3a2a54"} textAlign={"end"} fontWeight={600} sx={{ '@media(max-width:479px)': { fontSize: '17px' } }} >
                  Visit
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ width: '100%', display: 'table-row-group' }}>
            {trail.map((style, index) => (
              <animated.tr
                key={index}
                style={style}
                sx={{
                  display: 'table-row',
                  transition: 'background-color 0.3s',
                }}
              >
                <TableCell sx={{ display: 'table-cell', padding: '10px 15px',}}>
                  <Stack sx={{ alignItems: 'center' }} gap="8px" direction="row">
                    <Avatar
                      src={data[index].image}
                      sx={{
                        flexShrink: '0',
                        height: '50px',
                        width: '50px',
                        color: 'rgb(255, 255, 255)',
                        fontSize: '18px',
                        fontWeight: '500',
                        '@media(max-width:479px)': { fontSize: '15.5px' },
                      }}
                      radius="50%"
                    />
                    <Typography
                      sx={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: '17px',
                        fontWeight: '',
                        color:"#3a2a54"
                      }}
                      variant="p"
                    >
                      {data[index].name}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell sx={{ display: 'table-cell', padding: '10px 15px', }}>
                  <Typography
                    sx={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      color: '#3a2a54',
                      fontSize: '15px',
                      fontWeight: '500',
                    }}
                    variant="subtitle"
                  >
                    {data[index].stadium}
                    <SportsCricketOutlined sx={{ marginLeft: '4px', fontSize: '16px', verticalAlign: 'bottom' }} />
                  </Typography>
                </TableCell>
                <TableCell sx={{ display: 'flex', alignItems: 'center', padding: '26px 15px', }}>
                  <Typography
                    sx={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      color: '#3a2a54',
                      fontSize: '14px',
                      fontWeight: '500',
                    }}
                    variant="body2"
                  >
                  
                  </Typography>
                  <ArrowForwardIcon sx={{
                    ml:"600px",

                    fontSize:"18px"
                  }}/>
                </TableCell>
              </animated.tr>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}
