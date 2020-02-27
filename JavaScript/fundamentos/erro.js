function imprimirEmCaixaAlta(obj) {
    try {
        console.log(obj.name.toUpperCase())
    }
    catch (e) {
        tratarErro(e)
    }
}

function tratarErro(erro) {
    //throw new Error('....')
    //throw 'Carinha Feliz!'
    //throw 'Aguarde na linha'
    throw 'obj não possui o atributo nome e sim "name"'
}

imprimirEmCaixaAlta({nome: 'Rodolfo'})