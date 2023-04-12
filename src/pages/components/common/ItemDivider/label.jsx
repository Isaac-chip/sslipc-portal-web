import React from 'react';

export default function Label({ labelText }) {
  // 使用 Tailwind CSS 样式定义每个 item 的边框和间距
  return (
    <div className="w-20 text-gray-400">{labelText}</div>
  );
}