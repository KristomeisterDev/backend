const fs = require('fs');
const data = 'Aqui les va el contenido de fileSystem con promesas desde Node';

//fsPromises.writeFile(file, data[, options])
fs.Promises
    .writeFile('promiseFile.txt', data, 'utf-8')
    .then((data) => {
        console.log("Contenido: ", data)
    })
    .catch((error) => {
        console.log("no existe")
    });
