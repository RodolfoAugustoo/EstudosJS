/*
    Formas de instanciar objetos
*/

//literal
const obj1 = {}

//Em JS
const obj2 = new Object

//Função construtora
function produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco + (1 - desc)
    }
}

const obj3 = new produto('Sabao', 20, 0.2)
console.log(obj3.getPrecoComDesconto())

//Função factory

function criarFuncionario(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 2000,2)
const f2 = criarFuncionario('Maria', 2000, 7)

console.log(f1.getSalario().toFixed(2))
console.log(f2.getSalario().toFixed(2))