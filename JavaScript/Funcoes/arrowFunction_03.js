let comparaComThis = function(p){
    console.log(p === this)
}

comparaComThis(global)

const obj = {}
comparaComThis(obj)

comparaComThis.bind(obj)

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = p => console.log(this === p)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

/*
    O 'this' da arrow function é o 'this' do contexto que ela foi escrita
    O 'this' dessa função não aponta para o escopo global
    Mesmo que user o 'bind' essa mudança não ocorre
*/


