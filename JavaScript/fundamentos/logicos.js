/*
    Seguinte situação:
    Tenho dois trabalhos a fazer e caso as seguintes situações ocorra, tenho as opções a seguir
    Os dois OK = Compro uma TV de 50"
    Qualquer um deu certo = tomo sorvete
    Somente um OK = compro uma TV de 32"
    Nenhum deu certo = fico em casa
*/
const t1 = true
const t2 = true

function compras(trabalho1, trabalho2){
    //Comparação OR
    const comprarSorvete = trabalho1 || trabalho2

    //Comparação AND
    const comprarTv50 = trabalho1 && trabalho2

    //Comparaçãp XOR
    const comprarTv32 = trabalho1 != trabalho2

    //Comparação NOT
    const ficaEmCasa =  !trabalho1
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv32, ficaEmCasa, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))


