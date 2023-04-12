import React, { useState } from 'react';
import classNames from 'classnames';

const TextArea = ({ value, onChange, rows = 5, hoverStyle, focusStyle, ...restProps }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const textareaClasses = classNames(
    'block w-full px-4 py-2 rounded-lg border border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:shadow-outline transition duration-300',
    hoverStyle,
    isFocused && 'border-blue-500',
    isFocused && focusStyle
  );

  return (
    <textarea
      className={textareaClasses}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      rows={rows}
      {...restProps}
    />
  );
};

export default TextArea;
