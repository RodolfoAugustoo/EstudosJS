let carro = new Object

carro = {
    marca: 'Audi',
    preco: 70000,
    proprietario: {
        nome: 'Rodolfo',
        idade: 28,
        endereco: {
            logradouro: 'Rua Victor Gomes',
            numero: 467
        }
    },
    condutores: [{
        nome: 'Alana',
        idade: 4
    },
    {
        nome: 'Michele',
        idade: 35
    }],
    calcularSeguro(){
        //
    }
}

console.log(carro)