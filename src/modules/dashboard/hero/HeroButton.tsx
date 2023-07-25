import React from "react";

interface IHeroButton {
  name: string;
  color: string;
}

const HeroButton: React.FC<IHeroButton> = ({ name, color }) => (
  <div className="w-full md:w-1/2 ">
    <button
      className={`bg-${color} text-background font-bold text-2xl rounded-md py-5 w-full tracking-tight`}
    >
      {name}
    </button>
  </div>
);

export default HeroButton;
