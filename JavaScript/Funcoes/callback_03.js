/*
    Exemplo de callback no browser
    Esse arquivo serve apenas como anotação e não deve funcionar aqui no node
*/

//retorna um array
document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('O evento ocorreu')
}