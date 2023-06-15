import { Checkbox, Label } from "flowbite-react";
export default function VerifyCheckbox({ title, data,verify=false }) {
  return (
    <>
      <div className="relative">
        <div className="flex mt-4">
          <div className="flex flex-shrink-0 items-center relative mr-2">
            {verify && <span className="text-red-500 text-lg  top-2 -left-2">*</span>}
            {title}
          </div>
          <div className=" flex justify-between ml-6">
            {data &&
              data.map((item, index) => {
                return (
                  <div className="flex items-center ml-4">
                    <Checkbox id={index} />
                    <Label htmlFor={index}>&nbsp;&nbsp;{item.value}</Label>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
