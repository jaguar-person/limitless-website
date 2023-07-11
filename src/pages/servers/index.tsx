import { NextPage } from "next";
import ServerContainer from "../../modules/servers";
import MainLayout from "../../layouts/Main";

const Servers: NextPage = () => (
  <MainLayout>
    <ServerContainer />
  </MainLayout>
);

export default Servers;
