import Image from "next/image";
import HeatMapImage from "../../../images/heatmap.png";
import MobileHeatMapImage from "../../../images/mobile-heatmap.png";
import { useIsMobile } from "../../../utils/hooks/useIsMobile";

const HeatMap = () => {
  const isMobile = useIsMobile();
  return (
    <Image
      src={isMobile ? MobileHeatMapImage : HeatMapImage}
      width={isMobile ? 360 : 890}
      height={804}
      alt="heatmap"
      className="w-full md:rounded-md fixed left-0 top-0 md:relative"
    />
  );
};

export default HeatMap;
