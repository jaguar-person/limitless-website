import React, { useState } from "react";
import LeaderBoardSettings from "./settings";
import LeaderBoardMain from "./main";
import { useIsMobile } from "../../utils/hooks/useIsMobile";
import Decoration from "../../components/decoration";

const LeaderBoard: React.FC = () => {
  const [isLeaderBoard, setLeaderBoard] = useState(true);
  const [isBarZero, setBarZero] = useState(true);
  const isMobile = useIsMobile();

  const handleLeaderBoard = () => {
    setLeaderBoard(!isLeaderBoard);
  };

  const handleSettingBar = (event: React.WheelEvent<HTMLDivElement>) => {
    if (isMobile) {
      if (event.deltaY === 0) {
        setBarZero(true);
      } else {
        setBarZero(false);
      }
    }
  };

  return (
    <div
      className="mt-16 md:mt-48 mb-48 md:mb-20 gap-16 md:gap-20 flex flex-col items-center"
      onWheel={handleSettingBar}
    >
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
          currentBarStatus={isBarZero}
          onCurrentBarStatus={() => {
            setBarZero(true);
          }}
        />
        <LeaderBoardMain
          isLeaderBoard={isLeaderBoard}
          onLeaderBoard={handleLeaderBoard}
        />
      </div>
    </div>
  );
};

export default LeaderBoard;
