const peso1 = 1.0
const peso2 = Number('2.0')

const avaliacao1 = 9.584
const avaliacao2 = 4.567

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)

/*
    EXEMPLOS DE FUNÇÕES DA VARIÁVEL
*/

console.log(typeof media) // Tipo da variável
console.log(media.toPrecision(3)) //Qtd de números
console.log(media.toFixed(2)) // 2 casas após a virgula
console.log(media.toString(2)) //Binário