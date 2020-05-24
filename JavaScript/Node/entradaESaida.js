const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo){
console.log('Fala Anônimo!\n')
process.exit()

}else{
    process.stdout.write('Digite seu nome:')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '');

        process.stdout.write(`Fala ${nome}!!`)
        process.exit()
    })
}