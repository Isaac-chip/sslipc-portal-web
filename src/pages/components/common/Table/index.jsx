import { useState } from 'react';
import classNames from 'classnames';
const Table = ({ data={
    headers: [], // 表头
    rows: [
      ['Row 1, Col 1', 'Row 1, Col 2','Row 1, Col 3','Row 1, Col 4'], // 第一行
      ['Row 2, Col 1', 'Row 2, Col 2','Row2 col 3','Row2 col 4'], // 第二行
      ['Row 3, Col 1', 'Row 3, Col 2',], // 
      // ...
    ],
    rowSpan: [ // 可选。指定行合并的跨度
      [], 
      [null,2], 
      []
      // ...
    ],
    colSpan: [ // 可选。指定列合并的跨度
      [1, 1, null], // 第一列不合并，第二列合并前两列
      [null, null, 1], // 第三列合并后两列
      [1,3,null]
      // ...
    ],
  } }) => {
  const [mergedRows, setMergedRows] = useState([]);
  const [mergedCols, setMergedCols] = useState([]);


  return (
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr>
          {data?.headers?.map((header, index) => (
            <th key={index} className="border px-4 py-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row?.map((cell, colIndex) => {
              if (mergedRows.includes(rowIndex) || mergedCols.includes(colIndex)) {
                return null;
              }

              const rowSpan = data.rowSpan && data.rowSpan[rowIndex] && data.rowSpan[rowIndex][colIndex];
              const colSpan = data.colSpan && data.colSpan[rowIndex] && data.colSpan[rowIndex][colIndex];

              return (
                <td
                  key={`${rowIndex}-${colIndex}`}
                  className={classNames("text-lg border px-4 py-2",{"w-168px text-center":(colIndex+1)%2!=0})}
                  rowSpan={rowSpan}
                  colSpan={colSpan}
                  style={{
                    background:(colIndex+1)%2==0?"white":"#F2F6FA",
                    color:(colIndex+1)%2==0?"black":"#565656"
                  }}
                >
                  {cell}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
     
    </table>
  );
};

export default Table;