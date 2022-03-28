// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli_subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

let squadreCalcio = [

{
    'nome' : 'Roma',
    'punti_fatti' : 0,
    'falli_subiti' : 0,
},

{
    'nome' : 'Juventus',
    'punti_fatti' : 0,
    'falli_subiti' : 0,
},

{
    'nome' : 'Fiorentina',
    'punti_fatti' : 0,
    'falli_subiti' : 0,
},

{
    'nome' : 'Foggia',
    'punti_fatti' : 0,
    'falli_subiti' : 0,
},

{
    'nome' : 'Termoli',
    'punti_fatti' : 0,
    'falli_subiti' : 0,
},

{
    'nome' : 'Bari',
    'punti_fatti' : 0,
    'falli_subiti' : 0,
}

]

function getRandomInt(max) {
    return Math.floor(Math.random() * max )
}

for (let i = 0; i < squadreCalcio.length; i++) {

    squadreCalcio[i]["falli_subiti"] = getRandomInt(40);
    squadreCalcio[i]["punti_fatti"] = getRandomInt(80);
    
}

console.log(squadreCalcio)

let nomiFalli = [];

for (let i = 0; i < squadreCalcio.length; i++) {

    let element = squadreCalcio[i];

    let {nome,falli_subiti} = element;
   
    nomiFalli.push(
        {
            nome,
            falli_subiti, 
        }
    );
    
}

console.log(nomiFalli)
