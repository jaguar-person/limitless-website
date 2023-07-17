import React from "react";

interface IDecoration {
  color: string;
}

const Decoration: React.FC<IDecoration> = ({ color }) => (
  <div className={`bg-${color} w-16 h-4 rounded-2xl `} />
);

export default Decoration;
