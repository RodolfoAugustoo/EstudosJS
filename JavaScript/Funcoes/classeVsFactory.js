class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log('Meu nome é ' + this.nome)
    }
}

const p1 = new Pessoa('Rodolfo')
p1.falar()


/*
    Usando uma Factory
    Nesse caso o 'this.nome' não é necessário
    Já na classe é obrigatório
*/
const criarPessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}.`)
    }
}

const p2 = criarPessoa('Michele')
p2.falar()