import { TicketStatus } from "../enums";

export type TicketTableType = {
  id: string;
  status: TicketStatus;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type LeaderBoardTableType = {
  rank: number;
  icon: string;
  player: string;
  kills: number;
  deaths: number;
  kd: number;
  hours: number;
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
