import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "./components/common/Input";
import { Checkbox, Label } from "flowbite-react";
import DatePicker, { registerLocale } from "react-datepicker";
import TextArea from "./components/common/TexTArea";
import zhCN from "date-fns/locale/zh-CN";
import "react-datepicker/dist/react-datepicker.css";
import classNames from "classnames";

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
              <div className="relative w-5/12">
                <div className="flex mt-4 justify-end">
                  <div className="flex flex-shrink-0 items-center relative mr-2">
                    <span className="text-red-500 text-lg absolute top-2 -left-2">
                      *
                    </span>
                    企业名称
                  </div>
                  <CustomInput styles={{ width: "380px" }}></CustomInput>
                </div>
              </div>
              <div className="relative w-5/12">
                <div className="flex mt-4 justify-end">
                  <div className="flex flex-shrink-0 items-center relative mr-2">
                    <span className="text-red-500 text-lg absolute top-2 -left-2">
                      *
                    </span>
                    企社会统一信用代码
                  </div>
                  <CustomInput styles={{ width: "380px" }}></CustomInput>
                </div>
              </div>
              <div className="relative w-5/12">
                <div className="flex mt-4 justify-end">
                  <div className="flex flex-shrink-0 items-center relative mr-2">
                    <span className="text-red-500 text-lg absolute top-2 -left-2">
                      *
                    </span>
                    企业负责人
                  </div>
                  <CustomInput styles={{ width: "380px" }}></CustomInput>
                </div>
              </div>
              <div className="relative w-5/12">
                <div className="flex mt-4 justify-end">
                  <div className="flex flex-shrink-0 items-center relative mr-2">
                    <span className="text-red-500 text-lg absolute top-2 -left-2">
                      *
                    </span>
                    企业名称
                  </div>
                  <CustomInput styles={{ width: "380px" }}></CustomInput>
                </div>
              </div>
              <div className="relative w-5/12">
                <div className="flex mt-4 justify-end">
                  <div className="flex flex-shrink-0 items-center relative mr-2">
                    {/* <span className="text-red-500 text-lg absolute top-2 -left-2">
                      *
                    </span> */}
                    负责人职位
                  </div>
                  <CustomInput styles={{ width: "380px" }}></CustomInput>
                </div>
              </div>
              <div className="relative w-5/12">
                <div className="flex mt-4 justify-end">
                  <div className="flex flex-shrink-0 items-center relative mr-2">
                    {/* <span className="text-red-500 text-lg absolute top-2 -left-2">
                      *
                    </span> */}
                    通讯地址
                  </div>
                  <CustomInput styles={{ width: "380px" }}></CustomInput>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-16px">
          <div className="mt-23px">
            <p className="text-lg font-bold" style={{ color: "#3C76F3" }}>
              企业状况
            </p>
            <div className="pl-16px">
              <div className="relative w-5/12">
                <div className="flex mt-4">
                  <div className="flex flex-shrink-0 items-center relative mr-2">
                    <span className="text-red-500 text-lg  top-2 -left-2">
                      *
                    </span>
                    单位性质
                  </div>
                  <div className="w-700px flex justify-between ml-6">
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">民营企业</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">国有企业</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">外商独资企业</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">中外合资企业</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">其他</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="relative w-5/12">
                <div className="flex mt-4 justify-end">
                  <div className="flex flex-shrink-0 items-center relative mr-2">
                    <span className="text-red-500 text-lg absolute top-2 -left-2">
                      *
                    </span>
                    经济规模
                  </div>
                  <CustomInput styles={{ width: "380px" }}></CustomInput>
                  <p className="absolute -inset-y-1/2 translate-y-1/2 right-4">
                    万元
                  </p>
                </div>
              </div>
              <div className="relative w-5/12">
                <div className="flex mt-4 justify-end">
                  <div className="flex flex-shrink-0 items-center relative mr-2">
                    {/* <span className="text-red-500 text-lg absolute top-2 -left-2">
                      *
                    </span> */}
                    人员规模
                  </div>
                  <CustomInput styles={{ width: "380px" }}></CustomInput>
                </div>
              </div>
              <div className="relative w-5/12">
                <div className="flex mt-4 justify-end">
                  <div className="flex flex-shrink-0 items-center relative mr-2">
                    {/* <span className="text-red-500 text-lg absolute top-2 -left-2">
                      *
                    </span> */}
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
              <div className="relative w-5/12">
                <div className="flex mt-4 justify-end">
                  <div className="flex flex-shrink-0 items-center relative mr-2">
                    {/* <span className="text-red-500 text-lg absolute top-2 -left-2">
                      *
                    </span> */}
                    注册资本
                  </div>
                  <CustomInput styles={{ width: "380px" }}></CustomInput>
                  <p className="absolute -inset-y-1/2 translate-y-1/2 right-4">
                    万元
                  </p>
                </div>
              </div>
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
              <div className="relative w-5/12">
                <div className="flex mt-4">
                  <div className="flex flex-shrink-0 items-center relative mr-2">
                    <span className="text-red-500 text-lg  top-2 -left-2">
                      *
                    </span>
                    融资方式
                  </div>
                  <div className="w-700px flex justify-between ml-6">
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">知识产权质押融资</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="relative">
                <div className="flex mt-4">
                  <div className="flex flex-shrink-0 items-center relative mr-2">
                    <span className="text-red-500 text-lg absolute top-2 -left-2">
                      *
                    </span>
                    经济规模
                  </div>
                  <CustomInput styles={{ width: "380px" }}></CustomInput>
                  <p className="absolute right-4 -inset-y-1/2 translate-y-1/2">
                    万元
                  </p>
                </div>
              </div>

              <div className="flex w-full mt-4">
                <p className="w-72px mr-2 text-center">拟质押资产 介绍</p>
                <TextArea placeholder="简述申请需求"></TextArea>
              </div>
              <div className="flex w-full mt-4">
                <div className="flex flex-shrink-0 relative mr-2">
                  <span className="text-red-500 text-lg ">*</span>
                  资金用途
                </div>
                <TextArea placeholder="简述申请需求"></TextArea>
              </div>
              <div className="relative">
                <div className="flex mt-4">
                  <div className="flex flex-shrink-0 items-center relative mr-2">
                    拟最高可接受年费率
                  </div>
                  <CustomInput styles={{ width: "380px" }}></CustomInput>
                  <p className="absolute right-4 -inset-y-1/2 translate-y-1/2">
                    %
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-5/12">
              <div className="flex mt-4">
                <div className="flex flex-shrink-0 items-center relative mr-2">
                  {/* <span className="text-red-500 text-lg  top-2 -left-2">*</span> */}
                  希望到位时间
                </div>
                <div className="w-300px flex justify-between ml-6">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">3个月内</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">6个月内</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">12个月内</Label>
                  </div>
                </div>
              </div>
            </div>
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
              <span className="text-14" style={{color:"#8A8A8A"}}>说明：上传单个文件大小不超过5M，支持上传格式：png、jpg、jpeg、pdf、docx、xls、xlxs等</span>
            </div>
          </div>
        </div>
        <div className="text-16 text-white flex justify-center items-center mx-auto my-8" style={{
            width: '348px',
            height: '40px',
            background: 'linear-gradient(127deg, #5794FD 0%, #3761EA 100%)',
            boxShadow: '2px 4px 4px 0px rgba(83,142,251,0.4)',
            borderRadius: '100px 100px 100px 100px',
            opacity: 1
        }}>
        提交
        </div>
      </div>
    </>
  );
}
