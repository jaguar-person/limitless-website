import React from "react";
import Image from "next/image";
import AvatarIcon from "../../images/avatar.png";
import { useRouter } from "next/router";
import { ROUTING_PATH } from "../../utils/constants";

const User: React.FC = () => {
  const router = useRouter();
  return (
    <div
      className="flex gap-2 items-center cursor-pointer"
      onClick={() => {
        router.push(ROUTING_PATH.ACCOUNTS);
      }}
    >
      <Image src={AvatarIcon} width={50} height={50} alt="Avatar" />
      <div>
        <p className="text-white text-lg">TripleZone</p>
        <p className="text-secondary text-xs">PROFILE</p>
      </div>
    </div>
  );
};

export default User;
