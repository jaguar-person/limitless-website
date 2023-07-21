import React from "react";
import clsx from "clsx";

interface IRow {
  children: React.ReactNode;
  row: number;
}

interface ICell {
  children: React.ReactNode;
  className?: string;
}

export const TH: React.FC<ICell> = ({ children, className }) => (
  <div className={`leading-16 ${className} text-secondary-in-box`}>
    {children}
  </div>
);

export const TD: React.FC<ICell> = ({ children, className }) => (
  <div className={`leading-10 flex items-center justify-start ${className}`}>
    {children}
  </div>
);

export const TR: React.FC<IRow> = ({ children, row }) => {
  return (
    <div
      className={clsx(
        "py-2 px-5 rounded-md flex justify-between my-1 tr--hover",
        {
          "bg-secondary-background-accent": row % 2 === 1,
          "bg-secondary-background": row % 2 === 0,
          "rank-1": row === 0,
          "rank-2": row === 1,
          "rank-3": row === 2,
        }
      )}
    >
      {children}
    </div>
  );
};

export const THead: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="w-full flex justify-between bg-secondary-background">
    {children}
  </div>
);

export const TBody: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="text-secondary">{children}</div>;

export const Table: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="flex flex-col gap-2.5">{children}</div>;
