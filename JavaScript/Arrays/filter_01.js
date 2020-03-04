const produtos = [
    '{"nome": "Ipad", "preco": 2500, "fragil": true}',
    '{"nome": "Fone", "preco": 150, "fragil": true}',
    '{"nome": "Notebook", "preco": 2000, "fragil": true}',
    '{"nome": "martelo", "preco": 20, "fragil": false}'
]

const paraObj = json => JSON.parse(json)


const produtosCaros = produtos.map(paraObj).filter(function (p) {
    return p.preco > 2000
})
//console.log(produtosCaros)


const produtosFrageis = p => p.fragil
const caro = p => p.preco > 1000

//console.log(produtos.map(paraObj).filter(caro))
console.log(produtos.map(paraObj).filter(produtosFrageis))

/**
 * Filter é uma função callback que recebe o elemento, indice e o array
 * retorna se é verdadeiro ou falso
 */