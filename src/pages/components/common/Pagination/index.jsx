import { Tabs, Pagination } from "flowbite-react";

export default function PaginationPlus() {
  return (
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
              base: "w-12 border border-gray-300  py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
              active: "bg-blue-pagination text-white",
            },
          },
        }}
        currentPage={1}
        totalPages={1}
        layout="pagination"
        onPageChange={()=>{}}
        previousLabel="上一页"
        nextLabel="下一页"
      />
    </div>
  );
}
