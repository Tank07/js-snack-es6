// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

let squadreCalcio = [

{
    'nome' : 'Roma',
    'punti fatti' : 0,
    'falli subiti' : 0,
},

{
    'nome' : 'Juventus',
    'punti fatti' : 0,
    'falli subiti' : 0,
},

{
    'nome' : 'Fiorentina',
    'punti fatti' : 0,
    'falli subiti' : 0,
},

{
    'nome' : 'Foggia',
    'punti fatti' : 0,
    'falli subiti' : 0,
},

{
    'nome' : 'Termoli',
    'punti fatti' : 0,
    'falli subiti' : 0,
},

{
    'nome' : 'Bari',
    'punti fatti' : 0,
    'falli subiti' : 0,
}

]

function getRandomInt(max) {
    return Math.floor(Math.random() * max )
}

for (let i = 0; i < squadreCalcio.length; i++) {
    let falli = getRandomInt(40);
    
    
}

