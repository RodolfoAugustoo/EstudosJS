/***
 * É um tipo textual 
 * Utilizado para comunicação entre sistemas - trasmitir dados
 * Pode ser utilizado não somente em JS mas em quase todas linguagens
 */

const obj = { a: 1, b: 3, c: 4, soma() { return a + b } }

console.log(obj)
/**.
 * Transformando um obj em JSON
 */
console.log(JSON.stringify(obj))

/**
 * Somente os dados foram armazenados no JSON
 * A função não 
 * Os atributos devem ser delimitados por aspas duplas e também o texto (strings)
 * O o conteúdo sempre entre aspas simples e dentro de chaves ++> '{}'
 */

 console.log(JSON.parse('{"a": 1, "b": "texto", "c":4}'))

 /**
  * JSON validator no Google 
  * Valida se o JSON está ok ou não
  */