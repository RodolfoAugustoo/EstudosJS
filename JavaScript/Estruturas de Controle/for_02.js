const notas = [6, 7, 8.1, 9, 8, 5, 4, 3.1]

/*
    Não esquecer se usar o 'let'
    Assim o atributo ficará disponível apenas dentro do laço
*/

for(let i in notas){
    console.log(notas[i])
}

const pessoa = {
    nome: 'Rodolfo',
    idade: 27,
    peso: 87
}


for (let i in pessoa){
    console.log(`${i}: ${pessoa[i]}`)
}

console.log(i)