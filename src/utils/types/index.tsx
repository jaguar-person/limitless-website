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

export type IServer = {
  lastDate: string;
  count: number;
  name: string;
  description: string;
  player_alive: number;
  player_total: number;
};
