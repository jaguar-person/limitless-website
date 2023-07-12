import React from "react";
import { useState } from "react";
import ServersSwitchEurope from "./ServersSwitchEurope";
import ServersSwitchUSA from "./ServerSwitchUSA";

const ServerSwitch: React.FC = () => {
  const [switchFlag, setSwitchFlag] = useState(true);

  const handleSwitch = (flag: boolean) => (event: React.MouseEvent) => {
    setSwitchFlag(flag);
  };
  return (
    <div className="flex gap-2.5">
      <ServersSwitchEurope flag={switchFlag} onSwitch={handleSwitch} />
      <ServersSwitchUSA flag={switchFlag} onSwitch={handleSwitch} />
    </div>
  );
};

export default ServerSwitch;
