import React from "react";
import Image from "next/image";
import Pagination from "../pagination";
import { BorderWave } from "../border-wave";

type TableType = {
  rank: number;
  icon: string;
  player: string;
  kills: number;
  deaths: number;
  kd: number;
  hours: number;
};

interface ITable {
  data: TableType[];
  isLeaderBoardTable?: boolean;
}

const Table: React.FC<ITable> = ({ data, isLeaderBoardTable }) => {
  return (
    <div className="flex flex-col gap-2.5">
      <table className="min-w-full text-left text-sm font-light table-auto border-collapse">
        <thead className="border-b  bg-secondary-background border-none text-secondary-in-box">
          <tr>
            <th scope="col" className="px-2.5 pb-2.5 font-normal leading-6">
              Rank
            </th>
            <th scope="col" className="px-2.5 pb-2.5 font-normal leading-6">
              Player
            </th>
            <th scope="col" className="px-2.5 pb-2.5 font-normal leading-6">
              Kills
            </th>
            <th scope="col" className="px-2.5 pb-2.5 font-normal leading-6">
              Deaths
            </th>
            <th scope="col" className="px-2.5 pb-2.5 font-normal leading-6">
              K/D
            </th>
            <th scope="col" className="px-2.5 pb-2.5 font-normal leading-6">
              Hours
            </th>
          </tr>
        </thead>
        <tbody className="text-secondary">
          {data.map((item, key) => (
            <tr
              className={`cursor-pointer border-b border-none tr--hover my-1
                ${
                  key % 2
                    ? "bg-secondary-background"
                    : "bg-secondary-background-accent"
                } ${
                key === 0 &&
                "bg-gradient-to-l from-secondary-background-accent to-points/20"
              } ${
                key === 1 &&
                "bg-gradient-to-l from-secondary-background to-[#BEBEBE]/20"
              } ${
                key === 2 &&
                "bg-gradient-to-l from-secondary-background-accent to-[#FF9B3E]/20"
              }`}
              key={key}
            >
              <td
                className={`leading-10 py-2 px-4 font-medium rounded-l-md ${
                  key < 3 ? "text-black/75" : "text-secondary"
                } `}
              >
                <BorderWave
                  color={
                    key === 0
                      ? "#E7CF77"
                      : key === 1
                      ? "#999999"
                      : key === 2
                      ? "#FFA86A"
                      : "none"
                  }
                >
                  {item.rank}
                </BorderWave>
              </td>
              <td className="leading-10 py-2 px-4 font-medium text-white flex gap-2.5 items-center">
                <Image
                  src={require(`../../images/${
                    item.icon === undefined ? "avatar" : item.icon
                  }.png`)}
                  width={32}
                  height={32}
                  alt="player"
                  className="rounded-md"
                />
                {item.player}
              </td>
              <td className="leading-10 py-2 px-4 font-medium">{item.kills}</td>
              <td className="leading-10 py-2 px-4 font-medium">
                {item.deaths}
              </td>
              <td className="leading-10 py-2 px-4 font-medium">{item.kd}</td>
              <td className="leading-10 py-2 px-4 font-medium rounded-r-md">
                {item.hours}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center">
        <div className="flex justify-between">
          <p className="text-secondary">Showing 0 to 10 of 5169 entries</p>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Table;
