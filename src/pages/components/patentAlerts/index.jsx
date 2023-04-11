import SideBar from "../common/SideBar";
import AlertSteps from "./alertSteps";

export default function PatentAlerts() {
  const sideBarList = [
    {
      label: "专利预警",
      children: [],
      open: true,
    },
    {
      label: "国家海外知识产权纠纷应对指导",
      children: [],
      open: false,
    },
    {
      label: "全球维权指南",
      children: [],
      open: false,
    },
  ];
  return (
    <div className="flex">
      <SideBar sideBar={sideBarList}></SideBar>
      <div className="ml-4 w-full bg-white">
        {/* <Steps></Steps>  */}
        <AlertSteps></AlertSteps>
      </div>
    </div>
  );
}
