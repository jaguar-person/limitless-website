import React from "react";
import Image from "next/image";

interface IIcon {
  icon: string;
}

const Icon: React.FC<IIcon> = ({ icon }) => (
  <div className="py-2 px-3 rounded-md bg-secondary-background border border-secondary-background-accent">
    <Image
      src={require(`../../images/${icon}.svg`)}
      width={10}
      height={16}
      alt="icon"
    />
  </div>
);

export default Icon;
