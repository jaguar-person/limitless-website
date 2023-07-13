import React from "react";
import Image from "next/image";
import RefreshIcon from "../../../../images/refresh.svg";
import SiteIcon from "../../../../images/site.svg";
import DiscrodIconBlue from "../../../../images/discord--blue.svg";
import DiscrodIconPink from "../../../../images/discord--pink.svg";
import LinkIcon from "../../../../images/link.svg";
import {
  AccountActionTypes,
  AccountStatusTypes,
} from "../../../../utils/enums";

interface IAccountLink {
  name: string;
  status: AccountStatusTypes;
  action: AccountActionTypes;
}

const TicketsLinkedAccountLink: React.FC<IAccountLink> = ({
  name,
  status,
  action,
}) => {
  return (
    <div className="flex flex-col gap-5 p-5 bg-secondary-background border border-secondary-background-accent rounded-md">
      <div className="flex flex-col items-center gap-2 px-2">
        <div className="flex gap-3 items-center">
          <Image
            src={
              action === AccountActionTypes.BOOST
                ? DiscrodIconPink
                : DiscrodIconBlue
            }
            width={56}
            height={43}
            alt="discord"
          />
          <Image src={LinkIcon} width={95} height={26} alt="link" />
          <div className="py-1.5 px-2 bg-secondary-background-accent rounded-md text-secondary font-medium text-xs text-center">
            DISCORD KIT
          </div>
        </div>
        <div className="text-center">
          <p className="text-white font-bold text-lg">
            {action === AccountActionTypes.BOOST
              ? "Boost " + name
              : name + "Account"}
          </p>
          <p className="text-secondary">{status}</p>
        </div>
      </div>
      <button
        className={
          "flex justify-center items-center gap-2 btn-custom rounded-md py-2.5 " +
          (action === AccountActionTypes.UNLINK ? "bg-danger" : "bg-points")
        }
      >
        <p className="text-black/75 font-bold text-base">
          {action === AccountActionTypes.BOOST ? "Boost" : action + "Account"}
        </p>
        <Image src={SiteIcon} width={16} height={16} alt="site" />
      </button>
    </div>
  );
};

const TicketsLinkedAccounts: React.FC = () => (
  <div className="flex flex-col gap-5">
    <div className="flex justify-between">
      <p className="font-bold text-[28px] leading-10 text-white">
        Linked Accounts
      </p>
      <button className="btn-custom bg-gems flex gap-2 items-center">
        <p className=" text-black/75 text-base font-bold">Resend Rewards</p>
        <Image src={RefreshIcon} width={19} height={19} alt="refresh" />
      </button>
    </div>
    <div className="grid grid-cols-4 gap-3">
      <TicketsLinkedAccountLink
        name="Discord"
        status={AccountStatusTypes.NOT_CONNECTED}
        action={AccountActionTypes.LINK}
      />
      <TicketsLinkedAccountLink
        name="Steam"
        status={AccountStatusTypes.NOT_CONNECTED}
        action={AccountActionTypes.UNLINK}
      />
      <TicketsLinkedAccountLink
        name="Discord"
        status={AccountStatusTypes.BOOSTED}
        action={AccountActionTypes.BOOST}
      />
      <TicketsLinkedAccountLink
        name="Steam"
        status={AccountStatusTypes.NOT_CONNECTED}
        action={AccountActionTypes.UNLINK}
      />
    </div>
  </div>
);

export default TicketsLinkedAccounts;
