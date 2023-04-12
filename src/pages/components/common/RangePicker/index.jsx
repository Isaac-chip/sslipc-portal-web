import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import zhCN from "date-fns/locale/zh-CN";

registerLocale("zh-CN", zhCN);

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const startDatePlaceholder = "开始日期";
  const endDatePlaceholder = "结束日期";
  const datePickerStyles = {
    background:'#F2F6FA',
    borderRadius: '0px 0px 0px 0px',
    opacity: '1',
    border: '2px solid #F2F6FA'
  };

  return (
    <div className="flex justify-center">
      <div className="relative">
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          placeholderText={startDatePlaceholder}
          locale="zh-CN"
          className="h-46px w-125px text-center bg-gray-100  py-2 border-none  text-gray-900 leading-tight "
          style={datePickerStyles}
        />
      </div>
      <div className="relative ml-2">
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          placeholderText={endDatePlaceholder}
          locale="zh-CN"
          className="h-46px w-125px text-center bg-gray-100  py-2  border-none  text-gray-900 leading-tight"
          style={datePickerStyles}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
