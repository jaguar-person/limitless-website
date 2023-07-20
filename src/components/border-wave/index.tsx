import React from "react";

interface IBorderWave {
  color: string;
  children: React.ReactNode;
}

export const BorderWaveBgIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.558 7.8252C21.5856 7.6164 21.6 7.4076 21.6 7.2C21.6 4.3452 19.0284 2.0544 16.1748 2.442C15.3432 0.9624 13.7592 0 12 0C10.2408 0 8.6568 0.9624 7.8252 2.442C4.9656 2.0544 2.4 4.3452 2.4 7.2C2.4 7.4076 2.4144 7.6164 2.442 7.8252C0.9624 8.658 0 10.242 0 12C0 13.758 0.9624 15.342 2.442 16.1748C2.41432 16.3821 2.40029 16.5909 2.4 16.8C2.4 19.6548 4.9656 21.9396 7.8252 21.558C8.6568 23.0376 10.2408 24 12 24C13.7592 24 15.3432 23.0376 16.1748 21.558C19.0284 21.9396 21.6 19.6548 21.6 16.8C21.6 16.5924 21.5856 16.3836 21.558 16.1748C23.0376 15.342 24 13.758 24 12C24 10.242 23.0376 8.658 21.558 7.8252Z"
      fill={`${color}`}
    />
  </svg>
);

export const BorderWave: React.FC<IBorderWave> = ({ color, children }) => (
  <div className="relative">
    <BorderWaveBgIcon color={color} />
    <span className="absolute -top-2 left-2">{children}</span>
  </div>
);
