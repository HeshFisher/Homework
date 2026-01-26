const fs = require('fs');
fs.readFile(process.argv[2],'utf-8', (err, result) => {
    if (err) {
       return console.error(err)
    }
    console.log(result.split('\n').length - 1);
});
