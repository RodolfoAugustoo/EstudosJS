const marcas = ['Chevrolet', 'Volks', 'Ford', 'Kia']

function imprimir(nome, indice){
    console.log(`${indice + 1}, ${nome}`)
}

/*
    O callback ele chama a função quando um evento acontece
    No caso abaixo o evento é cada elemento do array 'marcas'
*/
marcas.forEach(imprimir)

/*
   Com uma arrow function
*/
marcas.forEach(marca => console.log(marca))

