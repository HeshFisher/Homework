const fs = require("fs");
const fileContents = fs.readFileSync(process.argv[2], "utf-8");
const newLines = fileContents.split("\n").length -1;
console.log(newLines);
