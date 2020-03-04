/**
 * Implementando um filter manualmente
 */

Array.prototype.filter2 = function (callback) {
    const novoArray = []

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const produtos = [
    '{"nome": "Ipad", "preco": 2500, "fragil": true}',
    '{"nome": "Fone", "preco": 150, "fragil": true}',
    '{"nome": "Notebook", "preco": 2000, "fragil": true}',
    '{"nome": "martelo", "preco": 20, "fragil": false}'
]

const paraObj = json => JSON.parse(json)


const produtosCaros = produtos.map(paraObj).filter2(function (p) {
    return p.preco > 2000
})
//console.log(produtosCaros)


const produtosFrageis = p => p.fragil
const caro = p => p.preco >= 2000

console.log(produtos.map(paraObj).filter2(caro))
//console.log(produtos.map(paraObj).filter2(produtosFrageis))

/**
 * Filter é uma função callback que recebe o elemento, indice e o array
 * retorna se é verdadeiro ou falso
 */