const quaseArray = {
  0: 'Ana',
  1: 'Rafael',
  2: 'José'
}

console.log(quaseArray)

/**
 * Simulando que o obj é um array usando o toString
 */

 Object.defineProperty(quaseArray, 'toString', {
   value: function(){ return Object.values(this) },
   enumerable: false
 })

 console.log(quaseArray[0])

 const meuArray = ['Rafael', 'Ana', 'Bia']
 console.log(meuArray[1])

 console.log(quaseArray.toString())