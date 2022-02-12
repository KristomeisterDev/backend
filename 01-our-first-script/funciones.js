//declaración
function greeting (nameToGreeting) {
    return `Hola ${nameToGreeting} buenas noches!!`  
}

const result = greeting ("paco")
console.log(`result: `,result)

//Pasar por Referencia
const otherFunction = greeting
console.log();
