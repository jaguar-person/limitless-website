import { NextPage } from "next";
import MainLayout from "../../../layouts/Main";
import TicketsAdd from "../../../modules/tickets/add";

const TicketAddPage: NextPage = () => (
  <MainLayout>
    <TicketsAdd />
  </MainLayout>
);
export default TicketAddPage;
