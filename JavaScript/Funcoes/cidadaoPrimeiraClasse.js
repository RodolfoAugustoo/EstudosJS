/*
    Função em JS pode ser chamado de First-Class Object
    Ou Higher Order Function

    Uma função pode ter retorno ou não
    Caso nao tenha, ela por default retorna 'undefined'

    Pode receber parâmetros ou não


*/

function func1(){
    /*
        Toda código da função fica dentro do bloco
        Mesmo que seja somente uma sentença (uma linha de código)
    */
}

/*
    Criar armazenando o retorno em uma constante
*/
const func2 = function(){}

/*
    Armazenar em um array
*/
const array = [function(a, b){return (a + b)}, func1, func2]
console.log(array[0](2,6))

/*
    Armazenar em um atributo de um objeto
*/
const obj = {}
obj.falar = function(){return 'Bom dia!'}
console.log(obj.falar())

/*
    Passando uma função como parâmetro
*/
function run(func){
    func()
}
run(function(){console.log("Função dentro de função  - PARÂMETRO")})

/*
    Uma função pode conter / retornar outra função
*/

function soma(a, b){
    return function(c){
        console.log(a + b +c)
    }
}

//Como ela contem outra função, pode ser invocada de maneira literal
soma(2,3)(5)

//Ou pode ser armazena em uma constante e depois chamar a interna
const somar = soma(2,4)
somar(6)