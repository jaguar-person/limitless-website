import React from "react";
import Image from "next/image";
import { LeaderBoardTableType } from "../../../utils/types";
import { Table, THead, TH, TBody, TR, TD } from "../../../components/table";
import { BorderWave } from "../../../components/border-wave";

interface ILeaderTable {
  data: LeaderBoardTableType[];
}

const LeaderTable: React.FC<ILeaderTable> = ({ data }) => (
  <Table>
    <THead>
      <TH>Rank</TH>
      <TH className="w-1/3 ml-5">Player</TH>
      <TH>Kills</TH>
      <TH>Deaths</TH>
      <TH>K/D</TH>
      <TH>Hours</TH>
    </THead>
    <TBody>
      {data.map((item, i) => (
        <TR key={i} row={i}>
          <TD>
            <div className={`${i < 3 ? "text-black/75" : "text-secondary"}`}>
              <BorderWave
                color={
                  i === 0
                    ? "#E7CF77"
                    : i === 1
                    ? "#999999"
                    : i === 2
                    ? "#FFA86A"
                    : "none"
                }
              >
                {item.rank}
              </BorderWave>
            </div>
          </TD>
          <TD className="w-1/3">
            <div className="flex gap-2.5 items-center">
              <Image
                src={require(`../../../images/${
                  item.icon === undefined ? "avatar" : item.icon
                }.png`)}
                width={32}
                height={32}
                alt="player"
                className="rounded-md"
              />
              {item.player}
            </div>
          </TD>
          <TD>{item.kills}</TD>
          <TD>{item.deaths}</TD>
          <TD>{item.kd}</TD>
          <TD>{item.hours}</TD>
        </TR>
      ))}
    </TBody>
  </Table>
);

export default LeaderTable;
