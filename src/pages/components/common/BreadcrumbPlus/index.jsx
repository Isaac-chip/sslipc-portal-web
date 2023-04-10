import { Breadcrumb } from "flowbite-react";

export default function BreadcrumbPlus({
  BreadcrumbList = [{ label: "", href: "" }],
}) {
  return (
    <div className="container mx-auto">
      <div className="flex items-center">
        <span className="text-xs mr-2 text-gray-400">当前位置:</span>
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item
            href="/"
            theme={{
              href: {
                on: "text-gray-400 hover:text-black text-xs",
              },
            }}
          >
            首页
          </Breadcrumb.Item>
          {BreadcrumbList.map((item) => {
            return (
              <Breadcrumb.Item
                href={item.href}
                theme={{
                  chevron: "w-4 h-4 text-gray-400",
                  href: {
                    on: "text-gray-400 hover:text-black text-xs",
                  },
                }}
              >
                {item.label}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    </div>
  );
}
