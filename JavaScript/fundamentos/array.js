const valores = ['a', 'b','c','d','e']
console.log(valores)

console.log(valores[1], valores[6])
valores[6] = 12

console.log(valores[1], valores[6])
console.log(valores)
console.log(valores.length)
valores.push(true,null)
console.log(valores)
valores[5] = 'Rodolfo'
console.log(valores)


console.log(valores.pop())
console.log(valores)
console.log(delete valores[2])
delete valores[2]
console.log(valores) 