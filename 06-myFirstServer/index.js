const http = require('http')

const server = http.createServer((request, response) => {
    console.log('url: ',request.url)
    console.log('method: ',request.method)

    response.write('Hola desde mi servidor con node.js')
    response.end()
})

server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto: 8080')
})

// ejercicio:1 
// koders
// GET / koders -> Aqui estan todos los koders
// POST / koders -> Aqui puedes crear koders
// x / x -> estaba preparado para esto

const http = require('http')

const server = http.createServer((request, response) => {
    
    console.log('url:8081/koders',request.url)
    console.log('method: ',request.method)

    if (request.url === '/koders') {
        if (request.method === 'GET') {
            response.write('aqui estan todos los koders')
        }
    }else if(request.method === 'POST'){
        response.write('Aqui puedes crear a los koders')
    }else{
        response.write('No estaba preparado para esto')
    }
    response.end()
})

server.listen(8081, () => {
    console.log('Servidor escuchando en el puerto: 8081')
})
