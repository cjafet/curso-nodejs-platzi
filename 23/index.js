const fs = require("fs");

let ids = [];
let titles = [];

fs.readFile('./tarefa/products-tarefa-3.json', (err, data) => {
    if (err) throw err;
    //console.log(data.toString());
    var json_dic = JSON.parse(data.toString());
    console.log(json_dic.length);

    for(let i=0; i < json_dic.length; i++) {
        console.log(json_dic[i]['productId']);
        ids.push(json_dic[i]['productId']);
        titles.push(json_dic[i]['title']);
    }

    let set = new Set(ids);
    console.log(set, set.size);

    console.log(`We sell ${json_dic.length} products of ${set.size} different types`);

    let title_set = new Set(titles);
    console.log(title_set, title_set.size);

    console.log(`We sell ${json_dic.length} products of ${title_set.size} different types`);
   
});