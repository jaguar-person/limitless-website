import { NextPage } from "next";
import Server from "../../modules/servers";
import MainLayout from "../../layouts/Main";

const ServersPage: NextPage = () => (
  <MainLayout>
    <Server />
  </MainLayout>
);

export default ServersPage;
