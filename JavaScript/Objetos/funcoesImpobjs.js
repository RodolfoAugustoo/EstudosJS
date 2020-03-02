const pessoa = {
    nome: 'Rodolfo',
    idade: 27
}
/*
    Forma de ler propriedades de objetos em JS
    Pode ajudar a montar um SQL dinamicamente entre outras facilidades
*/
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))

//Mostra os outros arrays dentro do obj pessoa
console.log(Object.entries(pessoa))

//Assim é possivel percorrer com um FOREACH
Object.entries(pessoa).forEach(e => {
    console.log(e)
})

//usando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

/*
    Adicionando propriedades ao objeto
    Com o property posso especificar detalhes além de somente definir o atributo
*/

/*
    Passo o objeto e entre aspas o nome da propriedade
*/
Object.defineProperty(pessoa, 'dataNascimento', {
    //Permito que possa ser listado ou não
    enumerable: true,
    //Permite ser alterado ou nãp
    writable: false,
    //já defino o valor
    value: "18/05/1992"
})

console.log(Object.keys(pessoa))


Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


/*
    Essa função concatena os atributos dos objetos
    No primeiro, que será o de destino
    Caso tenha duplicidade de um atributo que vier de outro obj
    Esse será sobrescrito e o último será o válido
    ECMAScript 2015
*/

const a = { a: 1 }
const b = { b: 2 }
const c = { c: 4, a: 6 }
const destino = {}

const d = Object.assign(destino, a, b, c)
console.log(d)

Object.freeze(d)
d.a = 12345

console.log(d)