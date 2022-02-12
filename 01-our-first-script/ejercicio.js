/*crear una función que nos salude por nuestro nombre esta función debe retornar el saludo en un string y adicional a esto usar el valor de retorno de la función para hacer un console.log*/

let greetings = (name) => {
    let name = "cris";
    return "Saludos a " + name;
}
console.log(greetings(name));

//ejemplo fer
//declaración de la función
function greeting(nameToGreeting){
    return `Hola ${nameToGreeting} Buenas Noches!!`
}
//ejecutando la función
const greetingToFer= greeting(`Fer`);//pasar el valor de retorno a la variable
console.log(`greetingToFer: `,greetingToFer);

const greetingToFer= greeting(`Fer`);//pasar el valor de retorno a la variable
console.log(`greetingToFer: `,greetingToFer);

let namePaco = "Paco";
console.log(`saludo a paco`,greeting(namePaco));


//una funcion que me regrese nombres aleatorios

function getNameRandom(){
    // index last = 6
    //lenght = 7 -> la cantidad de items de un arreglo
    const arrayNames = ["paco","erick","brayan","jess","hector","rubs","hugo"]
    //poder generar index random
    const indexRandom = Math.floor(Math.random()*(6-0)+0)
    return arrayNames [indexRandom]// string
}

console.log(`name random`, getNameRandom());

//pasar el retorno de una funcion a otra

const greetingRandom = greetings(getNameRandom()) //greeting("")
console.log(`greetingRandom: `, greetingRandom);

const nameRandom = getNameRandom()
console.log(`otherGreeting`,greetings(nameRandom));
