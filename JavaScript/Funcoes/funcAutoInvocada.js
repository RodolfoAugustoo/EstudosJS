/*
    IIFE - expressão de função imediatamente auto invocada
    Ela fica dentro dos parenteses
    No final abre e fecha os parenteses para que ela seja auto invocada
    Uma maneira de fugir do escopo global
*/

(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente.')
})()