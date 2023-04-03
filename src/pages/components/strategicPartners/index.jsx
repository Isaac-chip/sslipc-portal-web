import IntroTitle from "../common/IntroTitle";
import { Card } from "flowbite-react";
export default function StrategicPartners() {
  return (
    <div>
      <div className="mt-73px mb-42px">
        <IntroTitle title="战略合作伙伴" desc={"Strategic Partners"}></IntroTitle>
      </div>
      <div className="container mx-auto flex justify-between flex-wrap">
        <Card className="w-2/3 sm:w-1/5 h-80px mx-auto mb-10px" href="#"></Card>
        <Card className="w-2/3 sm:w-1/5 h-80px mx-auto mb-10px" href="#"></Card>
        <Card className="w-2/3 sm:w-1/5 h-80px mx-auto mb-10px" href="#"></Card>
        <Card className="w-2/3 sm:w-1/5 h-80px mx-auto mb-10px" href="#"></Card>
      </div>
    </div>
  );
}

