import React from "react";

interface ITooltip {
  isCopied: boolean;
}

const Tooltip: React.FC<ITooltip> = ({ isCopied }) => (
  <div
    className={
      "absolute right-0 -top-4 px-2 py-1 z-20 bg-gray-800 text-white text-xs rounded transition-all duration-300 transform " +
      (isCopied ? "opacity-100" : "opacity-0")
    }
  >
    <div className="relative">
      <span className="triangle " />
      Copied to clipboard!
    </div>
  </div>
);

export default Tooltip;
