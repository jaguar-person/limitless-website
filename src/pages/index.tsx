import { NextPage } from "next";
import DashBoardLayout from "../layouts/Dashboard";
import MainLayout from "../layouts/Main";
import Dashboard from "../modules/dashboard";

const DashboardPage: NextPage = () => {
  return (
    <DashBoardLayout>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </DashBoardLayout>
  );
};

export default DashboardPage;
