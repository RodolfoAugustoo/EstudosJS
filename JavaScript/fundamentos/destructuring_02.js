const [a] = [10]

console.log(a)

const[n1, , n3, ,n5,n6 = 0] = [1,3,5,6]
console.log(n1,n3,n5,n6)

/*
    No seguinte caso ignoro o primeiro elemento do array
    Vou no segundo elemento que é um array
    Dentro desse segundo elemento ignoro o primeiro elemento 
    E considero somente o segundo elemento desse array dentro de um array
    'Sim a leitura desse tipo de estrutura é complicado'
*/
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)