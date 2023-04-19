import dynamic from "next/dynamic";
import IpServices from "./components/home/ipServices";
import SpecialInformation from "./components/home/specialInformation";
import StrategicPartners from "./components/home/strategicPartners";
import PatentProject from "./components/home/patentProject";
const Banner = dynamic(() => import("./components/home/banner/index"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <IpServices></IpServices>
      <SpecialInformation></SpecialInformation>
      <PatentProject></PatentProject>
      <StrategicPartners></StrategicPartners>
    </div>
  );
}
