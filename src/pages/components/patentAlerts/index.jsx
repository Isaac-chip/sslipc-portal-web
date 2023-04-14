import { useState, useCallback, useMemo } from "react";
import SideBar from "../common/SideBar";
import AlertSteps from "./alertSteps";

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
        component: <div>3333</div>,
      },
      {
        label: "全球维权指南",
        children: [],
        open: false,
      },
    ],
    []
  );
  return (
    <div className="flex">
      <SideBar sideBar={sideBarList} setComponent={setComponent} />
      <div className="ml-4 w-full bg-white">{component}</div>
    </div>
  );
}
