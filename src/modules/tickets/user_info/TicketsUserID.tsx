import React, { useRef, useState } from "react";

interface ITicketsUserID {
  name: string;
  id: string;
}

const CopyIcon: React.FC<{ isHovered: boolean }> = ({ isHovered }) => (
  <svg
    width="19"
    height="20"
    viewBox="0 0 19 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={"cursor-pointer " + (isHovered ? "opacity-100" : "opacity-20")}
  >
    <path
      d="M18.6512 3.12104L16.3783 0.848086C16.1575 0.625096 15.8532 0.5 15.5378 0.5H9.46679C8.155 0.5 7.09183 1.56355 7.09183 2.875L7.09256 12.375C7.12523 13.6887 8.19025 14.75 9.50019 14.75H16.625C17.9313 14.75 19 13.6812 19 12.375V3.96045C19 3.64576 18.8738 3.34369 18.6512 3.12104ZM17.2188 12.375C17.2188 12.7029 16.9529 12.9688 16.625 12.9688H9.46679C9.13882 12.9688 8.87305 12.7029 8.87305 12.375V2.87982C8.87305 2.55193 9.1389 2.28607 9.46679 2.28607H14.2167L14.2501 4.0625C14.2501 4.71822 14.7819 5.25 15.4376 5.25H17.1854V12.375H17.2188ZM10.0939 17.125C10.0939 17.4529 9.82808 17.7188 9.50019 17.7188H2.34193C2.01396 17.7188 1.74819 17.4529 1.74819 17.125L1.78084 7.62871C1.78084 7.30081 2.04669 7.03496 2.37458 7.03496H5.93775V5.25H2.37495C1.06316 5.25 0 6.31318 0 7.625L0.000363665 17.125C0.000445304 18.435 1.06391 19.5 2.37532 19.5H9.50019C10.8064 19.5 11.8751 18.4312 11.8751 17.125V15.9375H10.1273L10.0939 17.125Z"
      fill="white"
    />
  </svg>
);

const TicketsUserID: React.FC<ITicketsUserID> = ({ name, id }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="flex md:gap-8 items-center md:px-5 py-2.5 md:rounded-md md:bg-[#302E3C] z-10 cursor-pointer"
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="truncate w-full">
        <div className="flex gap-2 items-center">
          <p className="text-secondary text-xs font-bold uppercase leading-5">
            {name}
          </p>
          <div className="md:hidden block">
            <CopyIcon isHovered={isHovered} />
          </div>
        </div>
        <p className="text-secondary-in-box text-xs leading-5 overflow-hidden">
          {id}
        </p>
      </div>
      <div className="md:block hidden">
        <CopyIcon isHovered={isHovered} />
      </div>
    </div>
  );
};

export default TicketsUserID;
