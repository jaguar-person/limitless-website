import React, { useState } from "react";
import LeaderBoardSettings from "./settings";
import LeaderBoardMain from "./main";

const LeaderBoard: React.FC = () => {
  const [isLeaderBoard, setLeaderBoard] = useState(true);
  return (
    <div className="mt-40 mb-20 gap-20 flex flex-col items-center">
      <div className="text-white font-bold text-5xl">
        Limitless Leaderboards
      </div>
      <div className="flex gap-3 w-full">
        <LeaderBoardSettings
          isLeaderBoard={isLeaderBoard}
          onLeaderBoard={(type: boolean) => {
            setLeaderBoard(type);
          }}
        />
        <LeaderBoardMain flag={isLeaderBoard} />
      </div>
    </div>
  );
};

export default LeaderBoard;
