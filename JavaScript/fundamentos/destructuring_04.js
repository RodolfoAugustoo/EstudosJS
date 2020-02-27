/*
    Informando um array com valores default
    Caso não seja informado um dos dois
*/

function range([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(range([10, 50]))

lista = [10,78]

console.log(range(lista))

console.log(range([98,1]))

console.log(range([98]))

console.log(range([]))

/*
    Imprime um erro
    No caso a função vai tentar desestruturar algo que é null ou undefined
*/
//console.log(range())