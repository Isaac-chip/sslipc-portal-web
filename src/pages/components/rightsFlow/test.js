const fs = require('fs');
const cheerio = require('cheerio');

// 读取HTML文件
fs.readFile('./test.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // 使用cheerio模块解析HTML
  const $ = cheerio.load(data);

  // 查找表格并遍历每一行
  const tableData = [];
  $('table tr').each((i, row) => {
    // 遍历每一列
    const rowData = [];
    $(row).find('td').each((j, cell) => {
      rowData.push($(cell).text().trim());
    });
    tableData.push(rowData);
  });

  // 输出结果
  console.log(tableData);
});