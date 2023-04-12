import React, { useState } from 'react';
import classNames from 'classnames';

const CustomInput = ({ value, onChange,placeholder,styles}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const inputClasses = classNames(
    'w-full h-39px px-4 py-2 rounded-md border focus:border-2 border-gray-300 focus:border-blue-500 transition duration-300',
    isFocused && 'outline-none border-blue-500', 
  );

  return (
    <input
      placeholder={placeholder}
      className={inputClasses}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={styles}
    />
  );
};

export default CustomInput;
