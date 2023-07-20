import React from "react";
import Image from "next/image";

interface IButton {
  leftIcon?: string;
  rightIcon?: string;
  bgColor?: string;
  color?: string;
  className?: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  name: string;
  width?: "full" | "fit";
}

const Button: React.FC<IButton> = ({
  leftIcon = null,
  rightIcon = null,
  bgColor = "gems",
  color = "background",
  className,
  size = "sm",
  name,
  width = "fit",
}) => (
  <button
    className={`z-10 rounded-md py-3 px-5 flex gap-2 items-center justify-center cursor-pointer font-bold bg-${bgColor} text-${size} w-${width} ${className}`}
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
      className={`font-extrabold text-base tracking-tighter capitalize text-${color}`}
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
