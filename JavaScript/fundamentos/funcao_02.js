//Armazenar uma função em uma variável

const imprimirSoma = function(a, b){ console.log( a + b ) }
imprimirSoma(2, 3)

/*
    Armazenando uma função ARROW com retorno em uma variável
*/
const soma = (a, b) =>{
    return a + b
}
console.log(soma(2,5))

/*
    Função ARROW com retorno implícito
    Funciona apenas quando a função é apenas uma linha de código
    Se for somente um atributo, parenteses pode ser descartado
*/
const subtracao = (a, b) => a - b
console.log(subtracao(2,1))

const dizimo = salario => salario * 0.1
console.log(dizimo(1200))