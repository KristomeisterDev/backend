const fs = require("fs");
const content = "esto es el contenido agregado desde node js";

//fs.writeFile(file, data[, options], callback)
fs.writeFile(`new-file.text`, content, "utf8", (error) => {
  if (error) {
    console.log("No se puede crear el archivo");
  } else {
    console.log("El archivo se creo correctamente");
  }
});
