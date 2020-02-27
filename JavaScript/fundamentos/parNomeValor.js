//Contexto léxico 1
const saudacao = 'Olá'
console.log(saudacao)


//Contexto léxico 2
function exec(){
    const saudacao = 'Faaaalaaa'
    return saudacao
}
console.log(exec())

/*
    Objetos são grupos aninhados de chave / valor (nome / valor)
*/
const cliente = {
    nome: 'Rodolfo',
    idade: 28,
    peso: 87,
    endereco:{
        rua: 'Victor Gomes Correa',
        numero: 497,
        CEP: 18108130
    }
}

console.log(cliente)