/**
 * Implementando 'map' para conhecimento do funcionamento
 */

Array.prototype.map2 = function (callback) {
  let lista = []

  for (let i = 0; i < this.length; i++) {
    lista.push(callback(this[i], i, this))    
  }
  return lista
}

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "caderno", "preco": 13.90 }',
  '{ "nome": "Lapis", "preco": 22.00 }',
  '{ "nome": "Estojo", "preco": 12.00 }'
]

console.log(carrinho)

/**
 * Primeiro precisa transformar esse JSON em um objeto
 */
const paraObj = json => JSON.parse(json)

/**
 * Apenas o preço ou o atributo que for necessário
 */
const apenasPreco = produto => produto.preco

const precos = carrinho.map2(paraObj).map2(apenasPreco)

console.log(precos)