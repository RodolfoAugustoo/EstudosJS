function area(altura, largura){
    const area = altura * largura
    if(altura < 1 || largura < 1){
        console.log('Os valores devem ser maiores que "1"')
    }
    else{
        return area
    }
}

console.log(area(10, 15))
console.log(area(3))
console.log(area(0, 4))
console.log(area(1,2,3,4,5,6))