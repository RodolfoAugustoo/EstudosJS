const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/3 * 13 * * 0', function(){
    console.log("Executando tarefa1", new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log("Cancelando a tarefa1.")
}, 20000);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 5)]
regra.hour = 13
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log("Executando a tarefa2", new Date().getSeconds())
})