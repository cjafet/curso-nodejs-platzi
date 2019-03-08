const AWS = require('aws-sdk');
var s3 = new AWS.S3();

let xl = require('excel4node');
let wb = new xl.Workbook();
let total_conversoes = 0;

var options = {
    'sheetFormat': {
        'baseColWidth': 20, // Defaults to 10. Specifies the number of characters of the maximum digit width of the normal style's font. This value does not include margin padding or extra padding for gridlines. It is only the number of characters.,
        'defaultColWidth': 20,
        'defaultRowHeight': 20,
        'thickBottom': true, // 'True' if rows have a thick bottom border by default.
        'thickTop': true // 'True' if rows have a thick top border by default.
    }
  };
let ws = wb.addWorksheet('Node',options);

let style = wb.createStyle({
    font: {
      color: '#000000',
      size: 11,
    },
    numberFormat: 'R$ #,##0.00; (R$ #,##0.00); -',
});

let header_style = wb.createStyle({
    font: {
      color: '#000000',
      size: 12,
      bold: true
    }
});

var params = {
    Bucket: "cjafet/platzi", 
    Key: "read-products.json"
};
s3.getObject(params, function(err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data.Body.toString('utf-8'));
        let obj = JSON.parse(data.Body.toString('utf-8')); 

        ws.cell(1, 1).string("title").style(header_style);
        ws.cell(1, 2).string("brand").style(header_style);
        ws.cell(1, 3).string("productid").style(header_style);
        ws.cell(1, 4).string("price").style(header_style);

        let h = 1;

        for (var i = 0; i < obj.length; i++) {
            h += 1;
            let id = String(obj[i].productId);
            ws.cell(h, 1).string(obj[i].title).style(header_style);
            ws.cell(h, 1).string(obj[i].brand).style(header_style);
            ws.cell(h, 1).string(id).style(header_style);
            ws.cell(h, 1).string(obj[i].salesAmount).style(header_style);
        }
        
        wb.writeToBuffer().then(function(buffer) {
            var params = {Bucket: 'cjafet/platzi', Key: 'products.xls', Body: buffer};
            s3.upload(params, function(err, data) {
                console.log(err, data);
            });
        });
    }
})