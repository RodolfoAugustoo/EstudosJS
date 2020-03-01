function criarPessoa(nome) {
    this.nome = nome

    this.getName = function () {
        console.log(`Meu nome é ${nome}.`)
    }
}

const p1 = new criarPessoa('Rodolfo')
p1.getName()