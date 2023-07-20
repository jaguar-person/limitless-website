import React from "react";
import Image from "next/image";
import AvatarIcon from "../../images/avatar.png";

const User: React.FC = () => (
  <div className="flex gap-2 items-center">
    <Image src={AvatarIcon} width={50} height={50} alt="Avatar" />
    <div>
      <p className="text-white text-lg">TripleZone</p>
      <p className="text-secondary text-xs">PROFILE</p>
    </div>
  </div>
);

export default User;
