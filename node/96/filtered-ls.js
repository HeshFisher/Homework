const fs = require("fs");

const folder = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(folder, (err, list) => {
    if (err) {
        return console.log(err);
    }
    list.forEach((file) => {
        if (file.endsWith(ext)) {
            console.log(file)
        }
    })
});
