import { Tabs, Pagination } from "flowbite-react";

export default function TabsPlus({ tabs, activeTab, onTabChange }) {
  return (
    <Tabs.Group
      onActiveTabChange={onTabChange}
  
      aria-selected={" bg-pink-950"}
      aria-label="Tabs with underline"
      style="underline"
      theme={{
        base:"w-full",
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
      {tabs.map((tab, index) => (
        <Tabs.Item active={activeTab==index} title={tab.label} key={index}>
          {tab.content}
        </Tabs.Item>
      ))}
    </Tabs.Group>
  );
}
