import React from "react";
import Image from "next/image";

interface IButton {
  leftIcon?: string;
  rightIcon?: string;
  bgColor?: string;
  color?: string;
  name: string;
}

const Button: React.FC<IButton> = ({
  leftIcon = null,
  rightIcon = null,
  bgColor = "gems",
  color = "black/[71%]",
  name,
}) => (
  <button
    className={`rounded-md py-3 px-5 flex gap-2 items-center justify-center cursor-pointer font-bold bg-${bgColor} text-${color}`}
  >
    {!!leftIcon && (
      <Image
        src={require(`../../images/${leftIcon}.svg`)}
        width={20}
        height={20}
        alt="left"
      />
    )}
    {name}
    {!!rightIcon && (
      <Image
        src={require(`../../images/${rightIcon}.svg`)}
        width={20}
        height={20}
        alt="right"
      />
    )}
  </button>
);

export default Button;
