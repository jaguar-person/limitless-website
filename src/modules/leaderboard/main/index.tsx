import DropDown from "../../../components/dropdown";
import LeaderBoardTable from "../table";

const LeaderBoardMain = () => (
  <div className="flex flex-col gap-2.5 flex-grow overflow-hidden">
    <div className="container">
      <div className="flex justify-between">
        <div className="flex gap-2.5 items-center">
          <div className="py-1 px-3.5 border border-points bg-points/[8%] text-points font-semibold text-xs">
            PVP
          </div>
          <p className="text-white text-lg">US 2X Quad Monthly</p>
        </div>
        <DropDown title="Lifetime" />
      </div>
      <LeaderBoardTable />
    </div>
    <div className="flex justify-between">
      <p className="text-secondary">Showing 0 to 10 of 5169 entries</p>
    </div>
  </div>
);

export default LeaderBoardMain;
