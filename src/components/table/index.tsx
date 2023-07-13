import React, { useState, MouseEventHandler, MouseEvent } from "react";
import Image from "next/image";

import LeftArrowIcon from "../../images/arrow-left.svg";
import RightArrowIcon from "../../images/arrow-right.svg";

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

interface IPaginationIcon {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  isCurrentPage?: boolean;
}

const TablePaginationIcon: React.FC<IPaginationIcon> = ({
  children,
  onClick,
  isCurrentPage,
}) => (
  <div
    className={
      "w-9 h-9 cursor-pointer inline-flex items-center justify-center rounded-lg  font-semibold border " +
      (isCurrentPage
        ? "text-black/75 bg-gems border-gems"
        : "text-[#ADADAD] bg-[#282730] border-[#363541]")
    }
    onClick={onClick}
  >
    {children}
  </div>
);

const Table: React.FC<ITable> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleCurrentPage = (currentPage: number) => (e: MouseEvent) => {
    setCurrentPage(currentPage);
  };

  const handleNextPage = (step: number) => (e: MouseEvent) => {
    if (
      (currentPage > 0 && currentPage < 10 && step > 0) ||
      (currentPage > 1 && currentPage < 11 && step < 0)
    )
      setCurrentPage(currentPage + step);
  };
  console.log(currentPage);

  return (
    <div className="flex flex-col gap-2.5">
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
              <td className="leading-10 py-2 px-4 font-medium">
                {item.deaths}
              </td>
              <td className="leading-10 py-2 px-4 font-medium">{item.kd}</td>
              <td className="leading-10 py-2 px-4 font-medium">{item.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center">
        <div className="flex justify-between">
          <p className="text-secondary">Showing 0 to 10 of 5169 entries</p>
        </div>
        <div>
          <nav className="isolate inline-flex gap-1">
            <TablePaginationIcon onClick={handleNextPage(-1)}>
              <Image src={LeftArrowIcon} width={8} height={8} alt="left" />
            </TablePaginationIcon>
            <TablePaginationIcon
              onClick={handleCurrentPage(1)}
              isCurrentPage={currentPage === 1}
            >
              1
            </TablePaginationIcon>
            <TablePaginationIcon
              onClick={handleCurrentPage(2)}
              isCurrentPage={currentPage === 2}
            >
              2
            </TablePaginationIcon>
            <TablePaginationIcon
              onClick={handleCurrentPage(3)}
              isCurrentPage={currentPage === 3}
            >
              3
            </TablePaginationIcon>
            <TablePaginationIcon>...</TablePaginationIcon>
            <TablePaginationIcon
              onClick={handleCurrentPage(10)}
              isCurrentPage={currentPage === 10}
            >
              10
            </TablePaginationIcon>
            <TablePaginationIcon onClick={handleNextPage(1)}>
              <Image src={RightArrowIcon} width={8} height={8} alt="right" />
            </TablePaginationIcon>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Table;
