import { Tabs, Pagination } from "flowbite-react";
import { useState } from "react";
import Card from "./card";
export default function PublicService() {
  const [pageSize, setPageSize] = useState(1);
  const onPageChange = (e) => {
    console.log(e);
    setPageSize(e);
  };
  return (
    <div>
      <img src="/publicService/banner2.png"  />
      <div className="container mx-auto mt-10px">
        <Tabs.Group
          onActiveTabChange={(tab) => console.log(tab)}
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
        <div className="flex items-center justify-center text-center">
          <Pagination
            theme={{  
                layout: {
                  table: {
                    base: "text-sm text-gray-700 dark:text-gray-400",
                    span: "font-semibold text-gray-900 dark:text-white",
                  },
                },
                pages: {
                  base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
                  showIcon: "inline-flex",
                  previous: {
                    base: " ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                    icon: "h-5 w-5",
                  },
                  next: {
                    base: "rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                    icon: "h-5 w-5",
                  },
                  selector: {
                    base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                    active:"bg-blue-pagination text-white"
                      
                  },
                },
      
            }}
            currentPage={pageSize}
            totalPages={100}
            onPageChange={onPageChange}
            previousLabel="上一页"
            nextLabel="下一页"
          />
        </div>
      </div>
    </div>
  );
}
