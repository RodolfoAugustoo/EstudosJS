console.log('#01', '01' == 1)

//Estritamente igual - leva o tipo em consideração
console.log('#02', '01' === 1)

console.log('#03', '03' != 3)

//Estritamente diferente
console.log('#04', '03' !== 3)

console.log('#05', 2 > 3)
console.log('#06', 2 < 3)
console.log('#07', 2 >= 3)
console.log('#08', 2 <= 3)

const d1 = new Date(0)
console.log(d1)
const d2 = new Date(0)
console.log(d2)

/*
    O resultado a seguir para as duas sentenças é: FALSE
    O sistema apenas compara os endereçoes de memória 
    Como são duas variáveis diferentes
    Imprime falso
*/
console.log('#09', d1 == d2)
console.log('#10', d1 === d2)

/*
    Compara diretamente os valores
    Leva em consideração até os milisegundos
*/
console.log('#12', d1.getTime() == d2.getTime())
console.log('#13', d1.getTime() === d2.getTime())
