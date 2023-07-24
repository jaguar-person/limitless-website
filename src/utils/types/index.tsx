import { TicketStatus } from "../enums";
import { SERVER_TYPES } from "../enums";

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

export type ServerType = {
  name: string;
  count: number;
  isChecked: boolean;
  type: SERVER_TYPES;
};

export type PlayerType = {
  name: string;
  id: string;
  icon: string;
  status: boolean;
  isChecked: boolean;
};
