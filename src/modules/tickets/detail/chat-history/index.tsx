import React from "react";
import Image from "next/image";
import { IChatHistory } from "../../../../utils/types";
import { useIsMobile } from "../../../../utils/hooks/useIsMobile";

interface ITicketsDetailChatHistory {
  chats: IChatHistory[];
}

const TicketsDetailChatHistory: React.FC<ITicketsDetailChatHistory> = ({
  chats,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col gap-5">
      {chats.map((chat, i) => (
        <div className="card-container p-4 flex flex-col gap-5" key={i}>
          <div className="flex gap-2.5 items-center">
            <Image
              src={require(`../../../../images/avatar__test.png`)}
              width={isMobile ? 45 : 56}
              height={isMobile ? 45 : 56}
              alt="avatar"
              className="rounded-full"
            />
            <div>
              <p className="text-white font-bold text-base">{chat.user.name}</p>
              <p className="text-secondary">{chat.user.date}</p>
            </div>
          </div>
          <p className="text-secondary-in-box leading-6">{chat.message}</p>
        </div>
      ))}
    </div>
  );
};

export default TicketsDetailChatHistory;
