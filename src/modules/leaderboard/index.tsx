import React, { useState } from "react";
import LeaderBoardSettings from "./settings";
import LeaderBoardMain from "./main";
import { useIsMobile } from "../../utils/hooks/useIsMobile";
import Decoration from "../../components/decoration";

const LeaderBoard: React.FC = () => {
  const [isLeaderBoard, setLeaderBoard] = useState(true);
  const isMobile = useIsMobile();
  return (
    <div className="mt-16 md:mt-48 mb-48 md:mb-20 gap-20 flex flex-col items-center">
      <div className="flex flex-col gap-4 text-white font-bold text-5xl items-center text-center">
        <Decoration color="points" />
        {!isLeaderBoard && isMobile ? "" : "Limitless Leaderboards"}
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
