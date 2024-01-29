import React from "react";
import TeamScreenHead from "./TeamsScreenHead";
import TeamCard from "./TeamCard";
import { Teams } from "../components/Teams";
import TeamCardList from "./TeamCardList";
import DataTable2 from "./Table";
import DataTable from "./Table";

export const TeansScree = () => {
  return (
    <div>
      <TeamScreenHead />

      <TeamCardList />
      <DataTable />
    </div>
  );
};
