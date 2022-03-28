// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const nomi = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

let min = 4;

let max = 2;

let valoriTra = [];

nomi.forEach(
    (element, index) => {

        console.log(element,index)

        if(index >= min && index <= max){

            valoriTra.push(`element`);
            console.log(valoriTra)

            return valoriTra;

        } 

            
    }
);

console.log(valoriTra)


let valoriFra = nomi.filter(
    (element, index) => {

        if(index >= min && index <= max){
            
            console.log(element)

            return true
        }

        return false
    }
)

console.log(valoriFra)