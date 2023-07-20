import React from "react";
import Table from "../../../components/table";
import Pagination from "../../../components/pagination";

const tableData = [
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
    <div className="md:hidden block"></div>
    <div className="md:hidden block">
      <Pagination />
    </div>
    <Table data={tableData} />
  </div>
);

export default LeaderBoardTable;
