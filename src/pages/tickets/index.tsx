import { NextPage } from "next";
import MainLayout from "../../layouts/Main";
import Tickets from "../../modules/tickets";

const TicketsPage: NextPage = () => (
  <MainLayout>
    <Tickets />
  </MainLayout>
);
export default TicketsPage;
