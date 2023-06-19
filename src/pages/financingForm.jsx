import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "./components/common/Input";
import VerifyInput from "./components/common/verifyInput";
import VerifyCheckbox from "./components/common/verifyCheckbox";
import { Checkbox, Label } from "flowbite-react";
import DatePicker, { registerLocale } from "react-datepicker";
import TextArea from "./components/common/TexTArea";
import VerifyTextArea from "./components/common/VerifyTextArea";
import zhCN from "date-fns/locale/zh-CN";
import "react-datepicker/dist/react-datepicker.css";
import classNames from "classnames";
// import CustomInput from "./components/common/Input";

registerLocale("zh-CN", zhCN);
export default function financingFormPage() {
  const [startDate, setStartDate] = useState(null);
  const startDatePlaceholder = "请选择成立时间";
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  return (
    <>
      <div className="container mx-auto bg-white pt-20px pl-20px pr-20px pb-20px mt-4 mb-4">
        <div className="flex items-center">
          <div className="w-4px h-20px" style={{ background: "#3C76F3" }}></div>
          <p className="text-xl font-bold ml-10px">融资需求申请</p>
        </div>
        <div className="pl-16px">
          <div className="mt-23px">
            <p className="text-lg font-bold" style={{ color: "#3C76F3" }}>
              基础信息
            </p>
            <div className="flex flex-wrap justify-between">
              <VerifyInput name="companyName" label="企业名称"></VerifyInput>
           
              
              {/* <VerifyInput label="企社会统一信用代码"></VerifyInput>
                <VerifyInput label="企业负责人"></VerifyInput>
                <VerifyInput label="企业名称"></VerifyInput>
                <VerifyInput verify={false} label="负责人职位"></VerifyInput>
                <VerifyInput verify={false} label="通讯地址"></VerifyInput> */}
            </div>
          </div>
        </div>
        <div className="pl-16px">
          <div className="mt-23px">
            <p className="text-lg font-bold" style={{ color: "#3C76F3" }}>
              企业状况
            </p>
            <div className="pl-16px">
              <VerifyCheckbox
                verify={true}
                title="单位性质"
                data={[
                  { value: "民营企业" },
                  { value: "国有企业" },
                  { value: "外商独资企业" },
                  { value: "中外合资企业" },
                  { value: "其他" },
                ]}
              ></VerifyCheckbox>
            </div>
            <div className="flex flex-wrap justify-between">
              {/* <VerifyInput label="经济规模" unit={"万元"}></VerifyInput>

                <VerifyInput label="人员规模" verify={false}></VerifyInput> */}
              <div className="relative w-5/12">
                <div className="flex mt-4 justify-end">
                  <div className="flex flex-shrink-0 items-center relative mr-2">
                    成立时间
                  </div>
                  <div className="relative">
                    <DatePicker
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      selected={startDate}
                      onChange={handleStartDateChange}
                      placeholderText={startDatePlaceholder}
                      locale="zh-CN"
                      className={classNames(
                        "w-380px h-39px px-4 py-2 rounded-md border focus:border-1 border-gray-300 focus:border-blue-500 transition duration-300",
                        isFocused && "outline-none border-blue-500"
                      )}
                    />
                  </div>
                </div>
              </div>
              {/* <VerifyInput
                  label="注册资本"
                  verify={false}
                  unit="万元"
                ></VerifyInput> */}

              <div className="flex w-full mt-4">
                <p className="w-72px mr-2 text-center">
                  单位当前 融资贷款 情况
                </p>
                <TextArea placeholder="简述申请需求"></TextArea>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-16px">
          <div className="mt-23px">
            <p className="text-lg font-bold" style={{ color: "#3C76F3" }}>
              融资意向
            </p>
            <div className="pl-16px">
              <VerifyCheckbox
                verify={true}
                title="融资方式"
                data={[{ value: "知识产权质押融资" }]}
              ></VerifyCheckbox>
            </div>

            {/* <VerifyInput label="拟融资额度" unit="万元"></VerifyInput>

              <VerifyTextArea label="拟质押资产 介绍"></VerifyTextArea>
              <VerifyTextArea verify={true} label="资金用途"></VerifyTextArea>
              <VerifyInput label="拟最高可接受年费率" unit="%"></VerifyInput> */}

            <VerifyCheckbox
              title="希望到位时间"
              data={[
                { value: "3个月内" },
                { value: "6个月内" },
                { value: "12个月内" },
              ]}
            ></VerifyCheckbox>
            <p
              className="mt-4 text-lg font-bold hover:underline cursor-pointer"
              style={{ color: "#3C76F3" }}
            >
              附件信息（请提供营业执照、法人身份证及拟质押资产相关文档及其他相关文件）
            </p>
            <div>
              <div className="flex items-center mt-4 mb-4">
                <span>附件上传：</span>
                <div
                  className="flex justify-center items-center text-white"
                  style={{
                    width: "128px",
                    height: "40px",
                    background:
                      "linear-gradient(127deg, #5794FD 0%, #3761EA 100%)",
                    boxShadow: "2px 4px 4px 0px rgba(83,142,251,0.4)",
                    borderRadius: " 100px 100px 100px 100px",
                    opacity: 1,
                  }}
                >
                  点击上传
                </div>
              </div>
              <span className="text-14" style={{ color: "#8A8A8A" }}>
                说明：上传单个文件大小不超过5M，支持上传格式：png、jpg、jpeg、pdf、docx、xls、xlxs等
              </span>
            </div>
          </div>
        </div>
        <div
          className="text-16 text-white flex justify-center items-center mx-auto my-8"
          style={{
            width: "348px",
            height: "40px",
            background: "linear-gradient(127deg, #5794FD 0%, #3761EA 100%)",
            boxShadow: "2px 4px 4px 0px rgba(83,142,251,0.4)",
            borderRadius: "100px 100px 100px 100px",
            opacity: 1,
          }}
        >
          提交
        </div>
      </div>
    </>
  );
}
