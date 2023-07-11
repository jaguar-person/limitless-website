import Image from "next/image";
import ShopIcon from "../../../images/shop.svg";
import SiteIcon from "../../../images/site.svg";

const Shop = () => (
  <div className="flex gap-[60px]">
    <Image src={ShopIcon} width={352} height={333} alt="shop" />
    <div className="flex flex-col gap-5 items-start py-10">
      <p className="font-bold text-[60px] leading-10 text-white">Shop</p>
      <p className="text-[22px] leading-[38px] text-secondary">
        Purchase a package from our webstore, gain exclusive perks and show your
        support for our servers. Visit the webstore now!
      </p>
      <div className="flex gap-3 px-7 py-4 bg rounded-md bg-points">
        <p className="text-black/70 text-lg font-bold">Visit Shop</p>
        <Image src={SiteIcon} width={20} height={20} alt="site" />
      </div>
    </div>
  </div>
);

export default Shop;
