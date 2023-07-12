import React from "react";
import Image from "next/image";

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
}

const Table: React.FC<ITable> = ({ data }) => (
  <table className="min-w-full text-left text-sm font-light">
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
          className={
            "cursor-pointer border-b border-none tr--hover " +
            (key % 2
              ? "bg-secondary-background"
              : "bg-secondary-background-accent")
          }
          key={key}
        >
          <td className="leading-10 py-2 px-4 font-medium">{item.rank}</td>
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
          <td className="leading-10 py-2 px-4 font-medium">{item.deaths}</td>
          <td className="leading-10 py-2 px-4 font-medium">{item.kd}</td>
          <td className="leading-10 py-2 px-4 font-medium">{item.hours}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
