import { Tabs } from "flowbite-react";
import Card from "./card";
export default function PublicService() {
  return (
    <div>
      <img src="/publicService/banner2.png" alt="" srcset="" />
      <div className="container mx-auto mt-10px">
        <Tabs.Group
          onActiveTabChange={(tab) => console.log(tab)}
          activeClasses="my-tab-item-active"
          aria-selected={" bg-pink-950"}
          aria-label="Tabs with underline"
          style="underline"
          theme={{
            tablist: {
              tabitem: {
                base: "flex items-center justify-center p-4 text-xl text-black font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
                styles: {
                  default: {
                    base: "rounded-t-lg",
                  },
                  underline: {
                    base: "rounded-t-lg",
                    active: {
                      on: "text-black rounded-t-lg border-b-4 border-blue active dark:text-blue-500 dark:border-blue-500",
                      off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
                    },
                  },
                },
              },
            },
          }}
        >
          <Tabs.Item title="新闻动态">
            <div className="mb-20px">
              <Card></Card>
            </div>
            <div className="mb-20px">
              <Card></Card>
            </div>
            <div className="mb-20px">
              <Card></Card>
            </div>
            <div className="mb-20px">
              <Card></Card>
            </div>
          </Tabs.Item>
          <Tabs.Item active={true} title="行业资讯">
            Dashboard content
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}