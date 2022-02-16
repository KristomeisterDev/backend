
// las promesas son objetos 

//metodo constructor -> objeto de un tipo
// resolve es una función que nos permitira pasar la promesa de pendiente a resuelta
//reject es una función que nos permitira pasar la promesa de pendiente a rechazada
const myPromise = new promise((resolve,reject) => {
    // logica interna
    const todoBien = true;
    if (todoBien){
        resolve("oki")
    }else
    {
        reject("todo salio mal")
    }
})

//los objetos de tipo promesa cuentan con dos metodos
//then () -> se cumple cuando la promesa se resolvio exitosamente
//recibe lo que mandamos en la funcion resolve
//catch () -> se ejecuta cuando la promesa ha sido rechazada
// recibe lo que mandamos en la función reject
myPromise
    .then((result) => {console.log(result)})//"oki"
    .catch((error) => {console.log(error)})//"no se que paso"
    
//wrapper en una función

function myFirstPromise () {
    return new promise ((resolve,reject)=> {
        // logica interna
    const todoBien = false
    if (todoBien){
        resolve("oki")
    }else
    {
        reject("todo salio mal")
    }
    })
}

/*const myFirstPromise = () => {
    return new promise (() => {})  
}

const myFirstPromise = () => new Promise((resolve, reject) => { first })

// para definir funciones voy function
//callbacks => arrow functions*/

myPromise
    .then((result) => {console.log(result)})//"oki"
    .catch((error) => {console.log(error)})//"no se que paso"

