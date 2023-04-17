import { useState, useCallback, useMemo } from "react";
import SideBar from "../common/SideBar";
import AlertSteps from "./alertSteps";
import GuidanceCenter from "./guidanceCenter";
import USA from "./globalGuide/USA";
import UK from "./globalGuide/UK";
import EU from "./globalGuide/EU";
import JP from "./globalGuide/JP";
import Kr from "./globalGuide/Kr";

export default function PatentAlerts() {
  const [component, setComponent] = useState(null);
  const sideBarList = useMemo(
    () => [
      {
        label: "专利预警",
        children: [],
        open: true,
        component: <AlertSteps></AlertSteps>,
      },
      {
        label: "国家海外知识产权纠纷应对指导",
        children: [],
        open: false,
        component: <GuidanceCenter></GuidanceCenter>,
      },
      {
        label: "全球维权指南",
        children: [
          {
            label:"美国",
            component:<USA></USA>
          },
          {
            label:"英国",
            component:<UK></UK>
          },
          {
            label:"欧盟",
            component:<EU></EU>
          },
          {
            label:"日本",
            component:<JP></JP>
          },
          {
            label:"韩国",
            component:<Kr></Kr>
          }


        ],
        open: true,
      },
    ],
    []
  );
  return (
    <div className="flex mb-4">
      <SideBar sideBar={sideBarList} setComponent={setComponent} />
      <div className="ml-4 w-full bg-white">{component}</div>
    </div>
  );
}
