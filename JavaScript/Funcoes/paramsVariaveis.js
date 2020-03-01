function soma(){
    let valor = 0

    for(i in arguments){
        valor += arguments[i]
    }
    return valor
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 4))
console.log(soma('a','bc'))