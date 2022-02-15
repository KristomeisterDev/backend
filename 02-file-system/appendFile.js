const fs = require("fs");
const moreText = "\n Aqui les va el texto adicional desde node ";
//fs.appendFile(path, data[, options], callback)
fs.appendFile("./new-file.text", moreText, "utf-8", (error) => {
  if (error) throw "no se pudo adjuntar mas texto desde node";
});
console.log("se adjunto mas texto desde node");
