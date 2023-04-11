import { useState, useEffect } from "react";
import SelectPlus from "../../common/Select";

import Steps from "../../common/Steps";
import CustomInput from "../../common/Input";

export default function Step1() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSelectChange = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Steps step={1}></Steps>
      <div className="mx-auto max-w-sm  sm:max-w-md md:max-w-xl lg:max-w-2xl pl-2 lg:pl-0">
        <div className="text-lg mt-20px">当前检索共0条专利</div>
        <form>
          <div class="sm:col-span-3">
            <div class="mt-2 flex">
              <div className="mb-4">
                <SelectPlus
                  options={options}
                  onChange={handleSelectChange}
                ></SelectPlus>
              </div>
              <div className="ml-4 w-full">
                <CustomInput placeholder={'可输入关键词、公司名称或者专利号'}></CustomInput>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
