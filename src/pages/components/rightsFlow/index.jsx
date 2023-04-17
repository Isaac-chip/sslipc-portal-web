import { useState } from "react";
import { Tabs, Dropdown, Sidebar } from "flowbite-react";
import BreadcrumbPlus from "../common/BreadcrumbPlus";
import SideBar from "../common/SideBar";


export default function RightsFlow() {
  const [component, setComponent] = useState(null);
  const sideBarList = [
    {
      label: "维权流程",
      children: [
        { label: "维权援助流程",component:<img src="/rightFlow/process.png"></img> },
        { label: "人民调解流程",component:<img className="mx-auto" src="/rightFlow/flow1.jpg"></img> },
        { label: "仲裁调解流程" },
        { label: "专利侵权纠纷提交材料" },
      ],
      open: true,
    },
    {
      label: "全球维权援助网络",
      children: [
        { label: "知识产权保护中心" },
        { label: "知识产权快速维权中心" },
        { label: "知识产权维权援助中心" },
      ],
      open: false,
    },
    {
      label: "全球维权援助网络1",
      children: [],
      open: false,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="py-3">
        <BreadcrumbPlus
          BreadcrumbList={[{ label: "维权流程", href: "/rightsFlow" }]}
        ></BreadcrumbPlus>
      </div>
      <div className="flex w-full">
        <SideBar sideBar={sideBarList} setComponent={setComponent} ></SideBar>
        <div className="ml-2 bg-white w-full px-1 py-1">
         {
          component
         }
        </div>
      </div>
    </div>
  );
}
