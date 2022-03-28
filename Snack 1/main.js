// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let bici = [

    {
        'nome' : 'Graziella',
        'peso' : 58,
    },

    {
        'nome' : 'Cinzia',
        'peso' : 63,
    },


    {
        'nome' : 'MountainBike',
        'peso' : 72,
    },


    {
        'nome' : 'DownHill',
        'peso' : 12,
    },


    {
        'nome' : 'Riders',
        'peso' : 24,
    },


    {
        'nome' : 'Bianchi',
        'peso' : 48,
    }



]

console.log(bici)

let pesominore = bici[0];

for (let i = 0; i < bici.length; i++) {

    let x = bici[i];

    if (pesominore[`peso`] > x[`peso`]) {
        pesominore = x
        
    }
    
}

console.log(pesominore)

const {nome, peso} = pesominore;
const pesominoreContainer = document.getElementById(`esito`);

pesominoreContainer.innerHTML = `<div>${peso} ${nome}</div>`


