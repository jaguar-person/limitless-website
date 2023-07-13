import { TicketType } from "../enums";

export type TicketTableType = {
  id: string;
  type: TicketType;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};
