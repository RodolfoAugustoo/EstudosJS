function teste1(num){
    if(num > 7)
        console.log(num)
        //console.log('Final')
    
    console.log('Final')
    //O javaScript não depende somente da identação
    //Leva em conta as chaves {}
}

teste1(8)
teste1(5)

/*
    Cuidado com o ';'
    Ele delimita uma sentença de código
    Não usar com as estruturas de controle
    No exemplo abaixo ele desconsidera o próximo bloco
    Como parte do 'if'

function teste2(num){
    if(num > 7);{
        console.log(num)
    }
}

*/


function teste2(num){
    if(num > 7){
        console.log(num)
    }
}

teste2(7)
teste2(9)