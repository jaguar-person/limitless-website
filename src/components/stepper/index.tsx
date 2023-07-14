import React from "react";

export const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-gems/[36%]"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 12"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 5.917 5.724 10.5 15 1.5"
    />
  </svg>
);

export const CheckIconChecked = () => (
  <svg
    className="w-4 h-4 text-[#1E3217]/75"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 12"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 5.917 5.724 10.5 15 1.5"
    />
  </svg>
);

interface IStepper {
  isChecked?: boolean;
  title: string;
  description: string;
}

const Stepper: React.FC<IStepper> = ({
  isChecked = false,
  title,
  description,
}) => (
  <ol className="relative text-gray-500 border-r-2 border-secondary-background">
    <li className="py-9 mr-8">
      <span
        className={
          "absolute -right-[13px] top-11 flex items-center justify-center w-6 h-6 rounded-[4px] border border-gems/[15%] " +
          (isChecked ? "bg-gems" : "bg-secondary-background-accent")
        }
      >
        {isChecked ? <CheckIconChecked /> : <CheckIcon />}
      </span>
      <div className="flex flex-col items-end min-w-[155px]">
        <p className="text-white font-medium text-base">{title}</p>
        <p className="text-secondary text-right">{description}</p>
      </div>
    </li>
  </ol>
);

export default Stepper;
