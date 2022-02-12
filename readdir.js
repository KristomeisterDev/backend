const fs = require("fs");
//fs.readdir(path[, options], callback
fs.readdir("./02-file-system", "utf-8", (err) => {
  if (err) throw err;
});
console.log("Se leyo el directorio");
