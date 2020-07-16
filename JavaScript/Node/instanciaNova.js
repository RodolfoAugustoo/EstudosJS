/**
 * Uma forma de driblar o cache automatico do NOde é usar uma factory function
 * Ela retorna sempre que requerida um novo objeto
 */


 module.exports = () => {
   return {
     valor: 1,

     inc(){
       this.valor++
     }
   }
 }
