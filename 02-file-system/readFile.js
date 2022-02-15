const fs = require("fs");
//import { readFile } from 'fs';

//fs.readFile(path[, options], callback)
fs.readFile("./new-file.text", "utf-8", (error, file) => {
  if (error) {
    throw error;
  }
  console.log(file);
});
console.log("Contenido del archivo");
