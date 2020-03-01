function div(dividendo, divisor) {
    const divisao = dividendo / divisor
    const resto = dividendo % divisor

    return `Divisão = ${divisao}\nResto = ${resto}`
}

console.log(div(10, 5))