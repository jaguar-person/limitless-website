import React, { useState } from "react";
import Image from "next/image";
import DropDown from "../../../components/dropdown";
import SearchBar from "../../../components/search-bar";
import EURIcon from "../../../images/eur.svg";
import USAIcon from "../../../images/usa.svg";
import { useIsMobile } from "../../../utils/hooks/useIsMobile";

interface ILeaderBoardSettingsServerDropDown {
  isFixed?: boolean;
  onServerDropdown?: () => void;
  isBottom?: boolean;
}

const LeaderBoardSettingsServerDropDown: React.FC<
  ILeaderBoardSettingsServerDropDown
> = ({ isFixed = true, onServerDropdown, isBottom = false }) => {
  const options = {
    europe: ["2x Solo-1", "2x Solo-2", "2x Solo-3"],
    america: ["3x Solo-1", "3x Solo-2", "3x Solo-3"],
  };

  const isMobile = useIsMobile();

  const [currentServer, setCurrentServer] = useState("");

  const handleServer = (server: string) => (e: React.MouseEvent) => {
    setCurrentServer(server);
  };

  return (
    <DropDown
      title="LR - US 2x Quad Monthly"
      bgColor={
        isMobile ? "secondary-background" : "secondary-background-accent"
      }
      width="full"
      onServerDropdown={onServerDropdown}
      isLeaderBoard={isBottom ? false : true}
    >
      <div
        className={`dropdown-container ${
          isFixed ? "" : "!relative"
        } px-2.5 !bg-secondary-background-accent`}
      >
        <SearchBar
          icon="search_2"
          placeholder="Search a server..."
          background="secondary-background"
        />
        {Object.entries(options).map((server) => (
          <div key={server[0]}>
            <div className="flex justify-between text-xs">
              <p className="text-white capitalize">{server[0]}</p>
              <p className="text-secondary">{server[1].length} Servers</p>
            </div>
            {server[1].map((item, key) => (
              <div
                className={
                  "cursor-pointer border-none flex mt-0.5 gap-2.5 py-1.5 px-2.5 rounded-md  " +
                  (item === currentServer ? "bg-secondary-background" : "")
                }
                key={key}
                onClick={handleServer(item)}
              >
                <Image
                  src={server[0] === "europe" ? EURIcon : USAIcon}
                  width={24}
                  height={24}
                  alt="eur"
                />
                <p className="text-secondary-in-box">{item}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </DropDown>
  );
};

export default LeaderBoardSettingsServerDropDown;
