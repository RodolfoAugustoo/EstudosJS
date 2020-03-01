function classifica(x, y, z) {
    
    if (x == y && x == z) {
        return 'Equilátero'
    }
    else if (x == y || x == z) {
         return 'Isósceles'
    }
    else {
        return 'Escaleno'
    }
}

console.log(classifica(3, 4, 5))
console.log(classifica(3, 3, 3))