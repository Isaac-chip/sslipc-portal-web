import { Tabs, Dropdown, Sidebar } from "flowbite-react";
import BreadcrumbPlus from "../common/BreadcrumbPlus";
import SideBar from "../common/SideBar";

export default function RightsFlow() {
  return (
    <div className="container mx-auto">
      <div className="py-3">
        <BreadcrumbPlus
          BreadcrumbList={[{ label: "维权流程", href: "/rightsFlow" }]}
        ></BreadcrumbPlus>
      </div>
        <SideBar></SideBar>
  
  
    </div>
  );
}
