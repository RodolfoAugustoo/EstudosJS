function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let i = 0

while(opcao != -1){

    opcao = getInteiroAleatorio(-1, 1000)
    console.log(opcao)
    i++
}

console.log('Iterações: ' + i)