const pessoa = {
    nome: 'Rodolfo',
    idade: 28,
    endereco:{
        logradouro: 'Rua Victor Gomes',
        numero: 497
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const { endereco: {logradouro, numero, cep }} = pessoa
console.log(logradouro,numero,cep)

const { endereco: {logradouro: l, numero: num, cep: c }} = pessoa
console.log(l,num,c)