const Excel = require('exceljs');
var wb = new Excel.Workbook();

var sheet;

wb.xlsx.readFile("./products.xlsx").then(function () {
    sheet = wb.getWorksheet("Node");

    console.log(sheet.rowCount);

    let count = sheet.rowCount;

    console.log(getCollNumber(1,1),getCollNumber(1,2),getCollNumber(1,3),getCollNumber(1,4));

    for(i=2; i < count; i++) {
        console.log(getCollNumber(i,1),getCollNumber(i,2),getCollNumber(i,3),getCollNumber(i,4));
    }
})

function getCollNumber(i,n) {
    return sheet.getRow(i).getCell(n).value;
}