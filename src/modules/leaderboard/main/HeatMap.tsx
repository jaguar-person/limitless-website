import Image from "next/image";
import HeatMapImage from "../../../images/heatmap.png";

const HeatMap = () => (
  <Image
    src={HeatMapImage}
    width={890}
    height={804}
    alt="heatmap"
    className="rounded-md"
  />
);

export default HeatMap;
