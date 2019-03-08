const fs = require("fs");

let sales = [];

Promise.all([
    getFile('products-tarefa-6-1.json'),
    getFile('products-tarefa-6-2.json'),
    getFile('products-tarefa-6-3.json'),
    getFile('products-tarefa-6-4.json'),
    getFile('products-tarefa-6-5.json'),
    getFile('products-tarefa-6-6.json')
]).then(() => {
    let total = sales.reduce((x,y) => { return x + y});
    console.log(total);
});

async function getFile(file) {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            var json_dic = JSON.parse(data.toString());
            
            for(let i=0; i < json_dic.length; i++) {
                sales.push(json_dic[i]['salesAmount']);
            }
            // We can resolve the promise now, since we add all array values
            resolve();
           
        });
    });           
    let result = await promise;
    return result;   
};