const fs = require("fs");

//fs.unlink(path, callback)
fs.unlink("./new-file.text", (error) => {
  if (error) throw error;
});
console.log("path/file.txt was deleted");
