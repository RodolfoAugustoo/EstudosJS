const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 799.98
prod1['Desconto legal'] = 0.40

console.log(prod1)
console.log(prod1.nome)
console.log(prod1.preco)
console.log(prod1["Desconto legal"])

/*
    Outra forma de criar objetos que nada mais é que
    Uma estrutura de pares 'chave / valor'
*/

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.99
}

console.log(prod2)
console.log(prod2.nome)
console.log(prod2.preco)