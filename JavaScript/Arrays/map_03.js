/**
 * Implementando um MAP personalizado
 */

Array.prototype.map2 = function (callback) {
   const novoArray = []

   for(let i = 0; i < this.length; i++){
       novoArray.push(callback(this[i], i, this))
   }

   return novoArray
}

//criando um JSON
const carrinho = [
    '{"nome": "tomate", "preco": 2.40}',
    '{"nome": "batata", "preco": 3.00}',
    '{"nome": "abacaxi", "preco": 6.00}'
]

//Necessário transformar esse JSON em um objeto
const paraObj = json => JSON.parse(json)

//Objetivo é retornar o preco de cada produto
const somentePreco = p => `R$ ${p.preco.toFixed(2).replace('.',',')}`

console.log(carrinho.map2(paraObj).map2(somentePreco))
