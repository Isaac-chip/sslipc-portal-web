import { Tabs, Dropdown, Sidebar } from "flowbite-react";
import BreadcrumbPlus from "../common/BreadcrumbPlus";
import SideBar from "../common/SideBar";

export default function RightsFlow() {
  const sideBarList = [
    {
      label: "维权流程",
      children: [
        { label: "维权援助流程" },
        { label: "人民调解流程" },
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
        children: [
        ],
        open: false,
      }
  ]
  return (
    <div className="container mx-auto">
      <div className="py-3">
        <BreadcrumbPlus
          BreadcrumbList={[{ label: "维权流程", href: "/rightsFlow" }]}
        ></BreadcrumbPlus>
      </div>
        <SideBar sideBar={sideBarList}></SideBar>
  
  
    </div>
  );
}