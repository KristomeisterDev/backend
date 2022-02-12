const fs = require("fs");
//fs.rmdir(path[, options], callback)
fs.rmdir("./Resources", (err) => {
  if (err) throw err;
});
console.log("Se elimino directorio");
