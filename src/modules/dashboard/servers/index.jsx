import ServerCard from "../../../components/server-card";

const Servers = () => (
  <div className="text-center flex flex-col items-center gap-9">
    <div className=" flex flex-col gap-2.5">
      <p className="font-bold text-[45px] leading-[39px] text-white">
        Our Servers
      </p>
      <div className="text-[20px] leading-[30px] text-secondary">
        <p>Discover Our Extensive Collection of High-Quality Rust Servers -</p>
        <p>Connect Instantly with a Simple Click!</p>
      </div>
    </div>
    <div className="flex gap-2.5">
      <ServerCard />
      <ServerCard />
      <ServerCard />
    </div>
    <div className="text-white text-xl">Explore more servers...</div>
  </div>
);

export default Servers;
