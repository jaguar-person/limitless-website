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
import Button from "../../../../components/button";
import { useIsMobile } from "../../../../utils/hooks/useIsMobile";

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
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-col gap-5 p-4 md:p-5 bg-secondary-background border border-secondary-background-accent rounded-md">
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
      <Button
        name={
          action === AccountActionTypes.BOOST ? "Boost" : action + "Account"
        }
        bgColor={action === AccountActionTypes.UNLINK ? "danger" : "points"}
        rightIcon="site"
        width="full"
      />
    </div>
  );
};

const TicketsLinkedAccounts: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="font-bold text-[28px] leading-10 text-white hidden md:block">
          Linked Accounts
        </p>
        <Button
          name="Resend Rewards"
          bgColor="gems"
          rightIcon="refresh"
          width={isMobile ? "full" : "fit"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-3">
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
};

export default TicketsLinkedAccounts;
