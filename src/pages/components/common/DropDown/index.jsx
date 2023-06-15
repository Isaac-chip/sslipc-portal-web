import React, { useState } from "react";
import { Select } from "flowbite-react";
function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="380px flex items-center mt-6">
       <div className="mr-2">申请人类别</div> 
      <Select className="w-380px" value={selectedOption} onChange={handleChange}>
        <option value="">请选择</option>
        <option value="option1">选项1</option>
        <option value="option2">选项2</option>
        <option value="option3">选项3</option>
      </Select>
    </div>
  );
}

export default Dropdown;
