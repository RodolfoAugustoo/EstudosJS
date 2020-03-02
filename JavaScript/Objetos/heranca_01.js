const ferrari = {
    modelo: 'f40',
    velMax: 340
}

const honda = {
    modelo: 'Civic',
    velMax: 220
}

console.log(ferrari)
console.log(honda)

/**
 * Acessando o protótipo do meu objeto
 * Um objeto por padrão aponta para Object.prototype
 * É a hierarquia mais alta de protótipo da linguagem JS
 */
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === (Object.prototype))

//Não tem outro protótipo acima de Object
console.log(Object.prototype.__proto__)

