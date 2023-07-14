import { NextPage } from "next";
import MainLayout from "../../../layouts/Main";
import TicketsDetail from "../../../modules/tickets/detail";

const TicketsDetailPage: NextPage = () => (
  <MainLayout>
    <TicketsDetail />
  </MainLayout>
);

export default TicketsDetailPage;
