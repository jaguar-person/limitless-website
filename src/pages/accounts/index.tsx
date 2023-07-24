import { NextPage } from "next";
import MainLayout from "../../layouts/Main";
import Accounts from "../../modules/accounts";

const TicketsPage: NextPage = () => (
  <MainLayout>
    <Accounts />
  </MainLayout>
);
export default TicketsPage;
