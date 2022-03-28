// Snack 4
// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2- Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3- Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];

  students.forEach(
      (element) => {
          let {name} = element;

          let maiusc = name.toUpperCase();

          console.log(maiusc);

          document.getElementById("targhe").innerHTML +=
          
          `<p>${maiusc}</p>`

      }
  );


  let votiSettanta = students.filter(
      (element) => {

        if(element.grades > 70){
            return true
        }
            return false

      }
  );

  console.log(votiSettanta)


  let secchioni = students.filter(
    (element) => {

      if(element.grades > 70  && element.id > 120 ){
          return true
      }
          return false

    }
);

console.log(secchioni)