const fs = require("fs");
const pathToRead = "newDirectory"
//fs.readdir(path[, options], callback
fs.readdir(pathToRead, "utf-8", (error,data) => {
  if (error) {
      console.error("Error: ",error)
      return //salida temprana
  }
  console.log("Se leyo el directorio", data)
});

