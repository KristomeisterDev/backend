const fs = require("fs");

//fs.copyFile(src, dest[, mode], callback)
fs.copyFile(
  "./01-our-first-script/ejercicio.js",
  "./02-file-system/ejercicios.js",
  (error) => {
    if (error) throw "No se pudo copiar el archivo";
  }
);
console.log("el texto fue copiado a su destino");
