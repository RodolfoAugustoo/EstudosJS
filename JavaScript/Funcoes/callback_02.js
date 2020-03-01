const notas = [1, 2, 3, 5, 4, 6, 8]

//Sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] <= 7) {
        notasBaixas.push(notas[i])
    }
}

console.log('#01 ', notasBaixas)

//Com callback
notasBaixas = notas.filter(n => n < 7)
console.log('#02 ', notasBaixas)

console.log(notas.filter(n => n > 7))
