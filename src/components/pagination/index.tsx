import React, { MouseEventHandler, useState } from "react";
import Image from "next/image";
import LeftArrowIcon from "../../images/arrow-left.svg";
import RightArrowIcon from "../../images/arrow-right.svg";

interface IPaginationIcon {
  children: React.ReactNode;
  onClick?: () => void;
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
        : "text-secondary-in-box bg-secondary-background border-secondary-background-accent")
    }
    onClick={onClick}
  >
    {children}
  </div>
);

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleCurrentPage = (currentPage: number) => () => {
    setCurrentPage(currentPage);
  };

  const handleNextPage = (step: number) => () => {
    if (
      (currentPage > 0 && currentPage < 10 && step > 0) ||
      (currentPage > 1 && currentPage < 11 && step < 0)
    )
      setCurrentPage(currentPage + step);
  };
  return (
    <div>
      <p className="text-center md:hidden text-secondary mb-2.5">
        Showing 0 to 10 of 5169 entries
      </p>
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
  );
};

export default Pagination;
