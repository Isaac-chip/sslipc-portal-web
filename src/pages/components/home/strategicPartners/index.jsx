import classNames from "classnames";
import IntroTitle from "../../common/IntroTitle";
import { Card } from "flowbite-react";
export default function StrategicPartners() {
    const cardTheme= {
        card: {
          root: {
            base: 'bg-blue',
          },
        },
      }
      
  return (
    <div className="mb-52px"> 
      <div className="mt-73px mb-42px">
        <IntroTitle title="战略合作伙伴" desc={"Strategic Partners"}></IntroTitle>
      </div>
      <div className="container mx-auto flex justify-between flex-wrap">
        <Card theme={cardTheme} className={classNames("w-2/3 sm:w-1/5 h-80px mx-auto mb-10px")} href="#">
            <img className="w-250px h-66px bg-black" src="" alt="" srcset="" />
        </Card>
        <Card className="w-2/3 sm:w-1/5 h-80px mx-auto mb-10px" href="#"></Card>
        <Card className="w-2/3 sm:w-1/5 h-80px mx-auto mb-10px" href="#"></Card>
        <Card className="w-2/3 sm:w-1/5 h-80px mx-auto mb-10px" href="#"></Card>
      </div>
    </div>
  );
}

