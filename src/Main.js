import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderScreen } from "./Header/HeaderScreen";



import { About } from "./components/About";
import { VenuseScreen } from "./VenuseScreen/VenuseScreen";
import { TeansScree } from "./TeamsScreen.js/TeansScree";
import TeamMembers from "./components/TeamMembers";
import { Home } from "./components/Home";
import { FixtureScrenn } from "./Fixtures/FixtureScrenn";
import Bookings from "./components/Bookings/Bookings";





export const Main = () => {
  
  

  return (
    <>
      <HeaderScreen />{" "}
      <Router>
        <Routes>
          <Route path="/venue" element={<VenuseScreen />} />
          <Route path="/" element={<Home />} />
          <Route path="/Teams" element={<TeansScree />} />
          <Route path="/About" element={<About />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/Fixtures" element={<FixtureScrenn />} />
          <Route path="/details/:id" element={<TeamMembers />} />
        </Routes>
      </Router>
    </>
  );
};
