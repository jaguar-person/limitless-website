import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { BorderWave } from "../../../components/border-wave";
import { LeaderBoardTableType } from "../../../utils/types";

interface ILeaderTableMobile {
  index: number;
  item: LeaderBoardTableType;
}

const LeaderTableMobile: React.FC<ILeaderTableMobile> = ({ index, item }) => (
  <div
    className={clsx("py-2 px-4 flex gap-3 relative", {
      "bg-[#2A2737] border-[#48406D]": index % 2 === 0,
      "bg-background": index % 2 === 1,
      "rank-1__mobile": index === 0,
      "rank-2__mobile": index === 1,
      "rank-3__mobile": index === 2,
    })}
  >
    <div className="absolute top-2 right-4 text-white">
      {index < 3 ? (
        <div className="relative text-black">
          <BorderWave
            color={
              index === 0
                ? "#E7CF77"
                : index === 1
                ? "#999999"
                : index === 2
                ? "#FFA86A"
                : "none"
            }
          >
            {item.rank}
          </BorderWave>
        </div>
      ) : (
        "#" + item.rank
      )}
    </div>
    <Image
      src={require(`../../../images/${item.icon}.png`)}
      width={72}
      height={68}
      alt="icon"
    />
    <div className="flex-grow overflow-hidden flex flex-col gap-2">
      <div className="text-white font-semibold text-lg leading-6">
        {item.player}
      </div>
      <div className="flex justify-between">
        <div>
          <p className="uppercase text-xs leading-3 text-secondary">Kills</p>
          <p className="text-white text-base">{item.kills}</p>
        </div>
        <div>
          <p className="uppercase text-xs leading-3 text-secondary">Deaths</p>
          <p className="text-white text-base">{item.deaths}</p>
        </div>
        <div>
          <p className="uppercase text-xs leading-3 text-secondary">K/D</p>
          <p className="text-white text-base">{item.kd}</p>
        </div>
        <div>
          <p className="uppercase text-xs leading-3 text-secondary">Hours</p>
          <p className="text-white text-base">{item.hours}</p>
        </div>
      </div>
    </div>
  </div>
);

export default LeaderTableMobile;
