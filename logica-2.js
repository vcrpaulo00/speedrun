let workTuesday = false
let workThursday = true

// Operador lógico E (and) -> &&
let buyTV55 = workThursday && workTuesday
console.log('Comprar TV 55:', buyTV55)

// Operador lógico ou (or) -> ||
let haveIcecream = workThursday || workTuesday
console.log('Tomar sorvete:', haveIcecream)

// Operador lógica ou exclusivo (xor) -> !=
let buyTV42 = workThursday != workTuesday
console.log('Comprar TV 42:', buyTV42)

// Operador lógico negação (not) -> !
let toBeFitness = !haveIcecream
console.log('Fica mais saudável:', toBeFitness)