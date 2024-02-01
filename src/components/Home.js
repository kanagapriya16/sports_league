import React, { useEffect, useState } from 'react';
import videoFile from "../assest/home.mp4";
import '../styles/Home/Home.css';

export const Home = () => {
  const [data, setData] = useState([]);

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


  const today = new Date().toISOString().split('T')[0];
  console.log(today)
  // Filter the data array to find items with today's date
  const todaysMatch = data.find(item => item.match_day === today);
  console.log(todaysMatch)

  return (
    <div className='homescreen'>
      <video autoPlay loop muted className='video-background'>
        <source src={videoFile} type='video/mp4' />
      </video>

      {todaysMatch && (
        <div  >
        
          <h2>Today's Match</h2>
          <p>Date: {todaysMatch.date}</p>
          <p>Opponent: {todaysMatch.opponent}</p>
         
        </div>
      )}
    </div>
  );
};
