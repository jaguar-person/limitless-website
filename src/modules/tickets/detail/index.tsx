import React, { useState } from "react";
import TicketsDetailChatHistory from "./chat-history";
import TicketsDetailChatAdd from "./chat-add";
import { TicketStatus } from "../../../utils/enums";
import TicketsDetailHeader from "./header";
import TicketsDetailChatAddMessage from "./chat-add/TicketsDetailChatAddMessage";

const MOCK_TICKET = {
  status: TicketStatus.OPENED,
  id: "#45858",
  server: "LR-EU 2x SOLO",
  createdAt: "Oct 11 at 13:12 AM",
  updatedAt: "Oct 13 at 10:38 AM",
};

const MOCK_CHATS = [
  {
    user: {
      avatar: "avatar",
      name: "killa",
      date: "Jan 12, 2023 05:00 GMT",
    },
    message:
      "Thank you for contacting us for assistance with setting up [product/service]. We apologize for the inconvenience. We will guide you through the setup process step-by-step to ensure you have a smooth experience.",
  },
  {
    user: {
      avatar: "avatar",
      name: "killa",
      date: "Jan 12, 2023 05:00 GMT",
    },
    message:
      "Thank you for contacting us for assistance with setting up [product/service]. We apologize for the inconvenience. We will guide you through the setup process step-by-step to ensure you have a smooth experience.",
  },
  {
    user: {
      avatar: "avatar",
      name: "killa",
      date: "Jan 12, 2023 05:00 GMT",
    },
    message:
      "Thank you for contacting us for assistance with setting up [product/service]. We apologize for the inconvenience. We will guide you through the setup process step-by-step to ensure you have a smooth experience.",
  },
];

const TicketsDetail: React.FC = () => {
  const [isMessage, setMessage] = useState(false);
  return (
    <div className="mb-80 md:mb-20 mt-6 md:mt-32 flex flex-col gap-5">
      <TicketsDetailHeader ticket={MOCK_TICKET} />
      {isMessage ? (
        <TicketsDetailChatAddMessage
          onMessage={() => {
            setMessage(false);
          }}
        />
      ) : (
        <div className="flex flex-col gap-5">
          <TicketsDetailChatHistory chats={MOCK_CHATS} />
          <TicketsDetailChatAdd
            onMessage={() => {
              setMessage(true);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TicketsDetail;
