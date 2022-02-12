const fs = require("fs");

//fs.mkdir(path[, options], callback)
fs.mkdir("Resources", (error) => {
  if (error) throw "No se pudo crear el directorio";
});
console.log("Se creo el directorio");
