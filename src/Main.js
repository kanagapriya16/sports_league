import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderScreen } from "./Header/HeaderScreen";

import { Home } from "@mui/icons-material";

import { About } from "./components/About";
import { VenuseScreen } from "./VenuseScreen/VenuseScreen";
import { TeansScree } from "./TeamsScreen.js/TeansScree";
import TeamMembers from "./components/TeamMembers";

export const Main = () => {
  return (
    <>
      <HeaderScreen />{" "}
      <Router>
        <Routes>
          <Route path="/venuse" element={<VenuseScreen />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Teams" element={<TeansScree />} />
          <Route path="/About" element={<About />} />
          <Route path="/details/:id" element={<TeamMembers />} />
        </Routes>
      </Router>
    </>
  );
};
