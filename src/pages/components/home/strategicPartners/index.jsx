import classNames from "classnames";
import IntroTitle from "../../common/IntroTitle";
import { Card } from "flowbite-react";
export default function StrategicPartners() {
  const cardTheme = {
    card: {
      root: {
        base: "bg-blue",
      },
    },
  };

  return (
    <div className="mb-52px">
      <div className="mt-73px mb-42px">
        <IntroTitle
          title="战略合作伙伴"
          desc={"Strategic Partners"}
        ></IntroTitle>
      </div>
      <div className="container mx-auto flex justify-between flex-wrap">
        <Card
          theme={cardTheme}
          className={classNames("w-2/3 sm:w-1/5 h-80px mx-auto mb-10px")}
          href="https://www.gippc.com.cn/ippc/index.shtml"
        >
          <img
            className="w-250px h-66px"
            src="/home/1.png"
            alt=""
            srcset=""
          />
        </Card>
        <Card className="w-2/3 sm:w-1/5 h-80px mx-auto mb-10px" href="https://www.gpic.gd.cn/gdhkm/index/assistance.jhtml">
        <img
            className="w-250px h-66px"
            src="/home/3.png"
            alt=""
            srcset=""
          /> 
        </Card>
        <Card className="w-2/3 sm:w-1/5 h-80px mx-auto mb-10px"  href="http://jingying.ctmon.com.cn/">
          <img className="w-250px h-66px bg-gray-400" src="/home/2.png" alt="" srcset="" />
        </Card>
        <Card
          className="w-2/3 sm:w-1/5 h-80px mx-auto mb-10px overflow-hidden"
          href="https://www.patsnap.com"
        >
          <img className="h-100px" src="/home/patsnap.jpeg" alt="" srcset="" />
        </Card>
      </div>
    </div>
  );
}
