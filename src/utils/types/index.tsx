import { TicketStatus } from "../enums";

export type TicketTableType = {
  id: string;
  status: TicketStatus;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type IChatHistory = {
  user: {
    avatar: string;
    name: string;
    date: string;
  };
  message: string;
};
