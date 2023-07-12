import { NextPage } from "next";
import LeaderBoard from "../../modules/leaderboard";
import MainLayout from "../../layouts/Main";

const LeaderBoardPage: NextPage = () => (
  <MainLayout>
    <LeaderBoard />
  </MainLayout>
);

export default LeaderBoardPage;
