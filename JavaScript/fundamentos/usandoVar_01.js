/*
    Uma variável declarada dentro de um bloco de código pode ser acessada fora?
*/
{
    {
        {
            {
                {
                    var sera = 'Será?'
                }
            }
        }
    }
}            
console.log(sera)

/*
    E uma variável declarada dentro de uma função?
*/
function teste(){
    var local = 123
    console.log(local)
}
console.log(local)

/*
    FUJA DO ESCOPO GLOBAL
*/