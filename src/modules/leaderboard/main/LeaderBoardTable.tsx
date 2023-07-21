import React from "react";
import Image from "next/image";
import Pagination from "../../../components/pagination";
import LeaderTable from "../shared/LeaderTable";

import RightIcon from "../../../images/arrow-right.svg";

const MOCK_DATA = [
  {
    rank: 1,
    icon: "avatar",
    player: "TripleZone",
    kills: 500,
    deaths: 120,
    kd: 84,
    hours: 183,
  },
  {
    rank: 2,
    icon: "avatar",
    player: "TripleZone",
    kills: 500,
    deaths: 120,
    kd: 84,
    hours: 183,
  },
  {
    rank: 3,
    icon: "avatar",
    player: "TripleZone",
    kills: 500,
    deaths: 120,
    kd: 84,
    hours: 183,
  },
  {
    rank: 4,
    icon: "avatar",
    player: "TripleZone",
    kills: 500,
    deaths: 120,
    kd: 84,
    hours: 183,
  },
  {
    rank: 5,
    icon: "avatar",
    player: "TripleZone",
    kills: 500,
    deaths: 120,
    kd: 84,
    hours: 183,
  },
  {
    rank: 6,
    icon: "avatar",
    player: "TripleZone",
    kills: 500,
    deaths: 120,
    kd: 84,
    hours: 183,
  },
  {
    rank: 7,
    icon: "avatar",
    player: "TripleZone",
    kills: 500,
    deaths: 120,
    kd: 84,
    hours: 183,
  },
  {
    rank: 8,
    icon: "avatar",
    player: "TripleZone",
    kills: 500,
    deaths: 120,
    kd: 84,
    hours: 183,
  },
  {
    rank: 9,
    icon: "avatar",
    player: "TripleZone",
    kills: 500,
    deaths: 120,
    kd: 84,
    hours: 183,
  },
  {
    rank: 10,
    icon: "avatar",
    player: "TripleZone",
    kills: 500,
    deaths: 120,
    kd: 84,
    hours: 183,
  },
];

const LeaderBoardTable: React.FC = () => (
  <div className="flex flex-col gap-6">
    <div className="md:hidden block">
      <div className="flex justify-between py-3 px-5 bg-gems items-center rounded-md">
        <p className="text-background font-bold text-base">Show Heatmap</p>
        <Image
          src={RightIcon}
          width={20}
          height={20}
          alt="icon"
          className="w-5 h-5"
        />
      </div>
    </div>
    <div className="md:hidden block">
      <Pagination />
    </div>
    <LeaderTable data={MOCK_DATA} />
  </div>
);

export default LeaderBoardTable;
