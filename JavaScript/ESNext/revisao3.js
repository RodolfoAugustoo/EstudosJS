/**
 * ES8: Object.values e Object.entries
 */
const obj = { a: 1, b: 2, c: 3 }
    //Retorna as chaves
console.log(Object.keys(obj))
    //Retorna somente os valores do objeto
console.log(Object.values(obj))
    //Retorna uma lista de arrays chave/valor
console.log(Object.entries(obj))

/**
 * Melhorias na notação literal
 */
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return `Bom dia ${nome}!`
    }
}
console.log(pessoa.ola())

/**
 * Classes
 */
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au AU AU'
    }
}

console.log(new Cachorro().falar())