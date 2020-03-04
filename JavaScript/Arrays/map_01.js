const carros = ['Civic', 'Astra', 'Gol','Ka']

console.log(carros)

/**
 * No caso vai criar um array com a mesma quantidade de posições
 * O 'map' é um array com propósito
 * no caso criar um array com os mesmos elementos do primeiro
 * só que tudo maiúsculo
 * Não causa modificação no array atual
 */
let carrosUpper = carros.map(function(e){
    return e.toUpperCase()
})

console.log(carrosUpper)


const numeros = [1,2,3,4,5,6,7,8]

const dobro = n => n*2
const quadrado = n => Math.pow(n,2)
const converteReal = n => `R$ ${parseFloat(n).toFixed(2).replace('.',',')}`

let resultado = numeros.map(dobro).map(quadrado).map(converteReal)
console.log(resultado)