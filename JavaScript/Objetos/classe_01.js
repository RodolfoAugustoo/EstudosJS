class Lancamento{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []        
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l in this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const luz = new Lancamento('agosto', 2018)
const contas = new CicloFinanceiro(6,18)

contas.addLancamentos(salario, luz)
console.log(contas.sumario())