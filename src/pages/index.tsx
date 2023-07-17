import { NextPage } from "next";
import MainLayout from "../layouts/Main";
import Dashboard from "../modules/dashboard";

const DashboardPage: NextPage = () => {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
};

export default DashboardPage;
