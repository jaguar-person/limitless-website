import React, { MouseEventHandler } from "react";
import Image from "next/image";

interface IButton {
  leftIcon?: string;
  rightIcon?: string;
  bgColor?: string;
  color?: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  name: string;
  width?: "full" | "fit";
  onClick?: MouseEventHandler | undefined;
}

const Button: React.FC<IButton> = ({
  leftIcon = null,
  rightIcon = null,
  bgColor = "gems",
  color = "background",
  size = "base",
  name,
  width = "fit",
  onClick,
}) => (
  <button
    className={`z-10 rounded-md py-3 px-5 flex gap-2 items-center justify-center cursor-pointer font-bold bg-${bgColor} w-${width} outline-none focus:ring-4 btn-animation`}
    onClick={onClick}
  >
    {!!leftIcon && (
      <Image
        src={require(`../../images/${leftIcon}.svg`)}
        width={20}
        height={20}
        alt="left"
      />
    )}
    <p
      className={`font-extrabold text-base capitalize text-${color} text-${size}`}
    >
      {name}
    </p>
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
