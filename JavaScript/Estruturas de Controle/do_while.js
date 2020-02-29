function numeroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

op = 0
i = 0

do{
    op = numeroAleatorio(-1 , 99)
    console.log(op)
    i++
}while(op != -1)

console.log(`Iterações: ${i}`)