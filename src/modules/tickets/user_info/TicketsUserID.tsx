import React from "react";
import Image from "next/image";
import CopyIcon from "../../../images/copy.svg";

interface ITicketsUserID {
  name: string;
  id: string;
}

const TicketsUserID: React.FC<ITicketsUserID> = ({ name, id }) => (
  <div className="flex md:gap-8 items-center md:px-5 py-2.5 md:rounded-md md:bg-[#302E3C] z-10">
    <div className="truncate w-full">
      <div className="flex gap-2 items-center">
        <p className="text-secondary text-xs font-bold uppercase leading-5">
          {name}
        </p>
        <Image
          src={CopyIcon}
          width={16}
          height={16}
          alt="copy"
          className="cursor-pointer block md:hidden"
        />
      </div>
      <p className="text-secondary-in-box text-xs leading-5 overflow-hidden">
        {id}
      </p>
    </div>
    <Image
      src={CopyIcon}
      width={20}
      height={20}
      alt="copy"
      className="cursor-pointer hidden md:block"
    />
  </div>
);

export default TicketsUserID;
