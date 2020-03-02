const pessoa = {
    nome: 'Joao'
}

console.log(pessoa.nome)
pessoa.idade = 22
console.log(pessoa)

/*
    Método para impossibilitar mudança no objeto
    Não é possivel realizar nenhuma alteração
*/

Object.freeze(pessoa)
pessoa.nome = 'Rodolfo'