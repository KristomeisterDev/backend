//header application/json
/*
{
    "message": "Hola!!"
}
*/
const http = require('http')
//const json = {message: 'Hola Koder!'}
const server = http.createServer((request,response) => {
    /*response.setHeader('Content-Type','application/json')
    response.writeHead(200,{'Content-Type':'application/json'})
    response.write(json.message)
    response.end()*/
    //agregar un header
    response.writeHead(400,{'Content-Type':'application/json'})
    const json = {message: 'Hola Koder!!'}
    const jsonString = JSON.stringify(json)
    console.log(jsonString)
    response.write(jsonString)
    response.end()
    //mando un json
})

server.listen(8080, () => {
    console.log('Server running on port 8080')
})