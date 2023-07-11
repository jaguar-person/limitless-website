import Image from "next/image";
import HeroIcon from "../../../images/hero.svg";

const Hero = () => (
  <div className=" flex flex-col">
    <div className="relative flex flex-col gap-10">
      <div className="font-bold leading-[84px] text-[66px] w-[60%] text-white">
        Limitless Rust The Ultimate Experience
      </div>
      <div className="flex gap-10">
        <button className="py-5 rounded-md font-bold text-xl px-[88px] bg-gems">
          Shop
        </button>
        <button className="py-5 rounded-md font-bold text-xl px-[88px] bg-info">
          Join Discord
        </button>
      </div>
      <Image
        src={HeroIcon}
        width={460}
        height={530}
        alt="hero"
        className="absolute right-0 -top-24"
      />
    </div>
  </div>
);

export default Hero;
