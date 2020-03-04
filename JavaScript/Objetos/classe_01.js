class Lancamento {
    constructor(nome = 'genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []     
    }
    addLancamento(...lancamentos) {
        lancamentos.forEach(lanc => {
            this.lancamentos.push(lanc)
        })
    }

    sumario() {
        let valorConsolidado= 0

        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado       
    }
}

const salario = new Lancamento('Salário', 45000)
const contaLuz = new Lancamento('CPFL', -90)
const agua = new Lancamento('SAAE', 50)

const contas = new cicloFinanceiro('maio', 2020)
contas.addLancamento(salario, contaLuz, agua)
console.log(contas.sumario())