import { NextPage } from "next";
import MainLayout from "../../../layouts/Main";
import TicketAdd from "../../../modules/tickets/add";

const TicketAddPage: NextPage = () => (
  <MainLayout>
    <TicketAdd />
  </MainLayout>
);
export default TicketAddPage;
