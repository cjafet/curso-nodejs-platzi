var fs = require("fs");

module.exports = {
    getFile: async function (file) {
        fs.readFile(file, 'utf-8', (err, res) => {
            console.log(res);
        });
    }
}

