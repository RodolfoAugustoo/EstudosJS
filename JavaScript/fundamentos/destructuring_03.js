/*
    Uma função que recebe um obj e usa destructuring para pegar os valores 
    Caso nenhum valor seja informado min e max já tem os valores default
*/


function range({min = 0, max  = 1000}){
    const valor  = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//Informando diretamente os valores
console.log(range(1,2))

//Informando um objeto
console.log(range({min: 40, max: 90}))
const obj = {min: 100, max: 200}
console.log(range(obj))

//Informando somente um valor
console.log(range({min: 30}))
console.log(range({max: 120}))

//Objeto vazio
console.log({})

//Somente chamando a função
//Imprime um erro
console.log(range())