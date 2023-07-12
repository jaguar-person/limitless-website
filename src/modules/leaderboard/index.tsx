import React from "react";
import LeaderBoardSettings from "./settings";
import LeaderBoardTable from "./table";

const LeaderBoard = () => (
  <div className="my-20 gap-20 flex flex-col items-center">
    <div className="text-white font-bold text-5xl">Limitless Leaderboards</div>
    <div className="flex gap-3">
      <LeaderBoardSettings />
      <LeaderBoardTable />
    </div>
  </div>
);

export default LeaderBoard;
