import React from "react";
import Pagination from "../../../components/pagination";
import LeaderBoardButton from "../shared/LeaderBoardButton";
import LeaderTable from "../shared/LeaderTable";

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

interface ILeaderBoardTable {
  onFlag: () => void;
}

const LeaderBoardTable: React.FC<ILeaderBoardTable> = ({ onFlag }) => (
  <div className="flex flex-col gap-6">
    <div className="md:hidden block">
      <Pagination />
    </div>
    <LeaderTable data={MOCK_DATA} />
    <Pagination />
  </div>
);

export default LeaderBoardTable;
