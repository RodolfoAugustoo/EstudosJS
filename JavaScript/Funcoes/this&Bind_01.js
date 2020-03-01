const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar()

/*
    O Bind vai atribuir o this ao objeto informado
    Assim fica possível usar o atributo interno de uma função
*/
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()