import xlsxFile from 'read-excel-file'

const xlsxFile = require('read-excel-file/node');
 
xlsxFile('./Produtos-E-Commerce.xlsx.xlsx').then((rows) => {
    rows.forEach((col)=>{
        col.forEach((data)=>{
          console.log(data);
          console.log(typeof data);
    })
})
})