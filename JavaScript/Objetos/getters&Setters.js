const sequencia={
    _valor: 1, // Convenção de nome, que indica uma cariável que não pode ser alterada
    get valor() {return this._valor++ },
    set valor(valor){
        if(this._valor < valor){
            this._valor = valor
        }
    }
}

/*
    O JS indentifica qual o comportamento 
    Que está chamando a função
    Caso seja leitura, será acessado o 'GET'
    Ou se for atribuição será acessado o 'SET'
*/

sequencia.valor = 5000
console.log(sequencia.valor)