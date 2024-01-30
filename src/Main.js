import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderScreen } from "./Header/HeaderScreen";



import { About } from "./components/About";
import { VenuseScreen } from "./VenuseScreen/VenuseScreen";
import { TeansScree } from "./TeamsScreen.js/TeansScree";
import TeamMembers from "./components/TeamMembers";
import { Home } from "./components/Home";
import { FixtureScrenn } from "./Fixtures/FixtureScrenn";





export const Main = () => {
  return (
    <>
      <HeaderScreen />{" "}
      <Router>
        <Routes>
          <Route path="/venuse" element={<VenuseScreen />} />
          <Route path="/Home1" element={<Home />} />
          <Route path="/Teams" element={<TeansScree />} />
          <Route path="/About" element={<About />} />
          <Route path="/Fixtures" element={<FixtureScrenn />} />
          <Route path="/details/:id" element={<TeamMembers />} />
        </Routes>
      </Router>
    </>
  );
};
