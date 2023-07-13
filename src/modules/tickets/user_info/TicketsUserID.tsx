import React from "react";
import Image from "next/image";
import CopyIcon from "../../../images/copy.svg";

interface ITicketsUserID {
  name: string;
  id: string;
}

const TicketsUserID: React.FC<ITicketsUserID> = ({ name, id }) => (
  <div className="flex gap-8 items-center px-5 py-2.5 rounded-md bg-[#302E3C] z-10">
    <div>
      <p className="text-white font-bold">{name}</p>
      <p className="text-secondary-in-box text-xs">{id}</p>
    </div>
    <Image
      src={CopyIcon}
      width={20}
      height={20}
      alt="copy"
      className="cursor-pointer"
    />
  </div>
);

export default TicketsUserID;
