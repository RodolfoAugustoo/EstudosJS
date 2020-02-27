
//Undefined - não é uma boa prática essa forma
let valor
console.log(valor)

/*
    Undefined é quando a variável ou objeto não tem valor nenhum atribuído
    Nem um valor real e nem nulo
    A recomendação é quando for necessário deixa um atributo com valor falso, vazio
    Declarar sempre como nulo
    O undefined é para o sistema informar que aquele obj ou variável
    Nunca foi definido
*/

valor = null
console.log(valor)

/*
    Quando uma variáveç é definida como null
    Não é possível acessar nenhuma função / método dela
    Será impresso um erro como a seguir
*/
//console.log(valor.desconto)

/*
    A seguir será impresso UNDEFINED 
    Agora a variável não é null mas o objeto preco
    Nunca foi definido
*/
valor = {}
console.log(valor.preco)
console.log(!!valor.preco)

valor.preco = null
console.log(valor)

/*
    A recomendação é quando for necessário zerar uma referência
    Declarar como null
*/