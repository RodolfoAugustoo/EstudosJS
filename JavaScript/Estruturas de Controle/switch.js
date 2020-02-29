const resultado = function (nota) {
    switch (nota) {

        case 10: case 9:
            console.log('Quadro de honra! ')
            break;

        case 7: case 8:
            console.log('Aprovado')
            break
            
        case 4: case 5: case 6:
            console.log('Recuperação')
            break

        case 0: case 1: case 2: case 3:
            console.log('Reprovado')
            break
        
        default:
            console.log('Nota inválida!')
    }
}

resultado(5)
resultado(9)
resultado(8)
resultado(2)
resultado(-12)
resultado(11)