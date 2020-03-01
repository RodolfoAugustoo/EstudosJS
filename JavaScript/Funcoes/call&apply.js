/*
    O que muda de um pro outro é a forma que os parâmetros são informados
    No apply os paramentros devem ser informados dentro de um array
    No call os parâmetros são passados diretamente dentro da função
*/

function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} `
}

const produto = {
    nome: 'Notebok',
    preco: 4567,
    desc: 0.16,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())

console.log(produto.getPreco())

console.log(getPreco.call(produto))
console.log(getPreco.apply(produto))

console.log(getPreco.call(produto, 0.12, '$'))
console.log(getPreco.apply(produto, [0.13, 'U$$']))