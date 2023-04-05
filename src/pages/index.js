import dynamic from "next/dynamic";
import Header from "./components/common/Header/index";
import IpServices from "./components/ipServices";
import SpecialInformation from "./components/specialInformation";
import StrategicPartners from "./components/strategicPartners";
const Banner = dynamic(() => import("./components/banner/index"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <IpServices></IpServices>
      <SpecialInformation></SpecialInformation>
      <StrategicPartners></StrategicPartners>
    </div>
  );
}
