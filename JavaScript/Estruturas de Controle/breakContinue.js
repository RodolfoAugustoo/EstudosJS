/*
    O uso do brake é para que seja interrompido o laço mais próximo
    No caso abaixo é o 'for'
    Ele funciona para laços de repetição e não para condicional
    for while e switch
*/

const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

for (let x in notas) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${notas[x]}`)
}

/*
    No caso do continue ele encontra o índice 5
    Pula e continua a partir do próximo, no caso
    Índice 6
    Obs>: não está olhando o valor e sim o índice!!!!!!!!!!!
*/

for (let y in notas) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${notas[y]}`)
}

/*
    Forma deselegante de resolver alguns problemas
    A maneira correta é dividir em métodos / funções
    O exemplo abaixo recorre a mesma forma que antigamente
    Utilizava o GO TO
*/
externo:
for (a in notas) {
    for (b in notas) {
        if (a == 2 && b == 3) {
            break externo
        }
        console.log(`Par[a,b] = ${a},${b}`)
    }
}