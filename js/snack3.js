/*
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

// CREO UNA LISTA DI NOMI E COGNOMI
const names = ['Matteo', 'Luca', 'Roberta',]
const surnames = ['Filippini', 'Garda'];
// CREO LA LISTA DI GATSBY
const gatsby = [];
// FINO A QUANDO LA LISTA DI GATSBY NON HA 3 NOMICOGNOMI DIVERSI LA RIEMPIO
let i = 0;
let nameSurname;
while (i <= 3) {
    // PRENDO UN NOME E UN COGNOME A CASO
    const randomName = Math.floor(Math.random() * names.length);
    const randomSurname = Math.floor(Math.random() * surnames.length);
    nameSurname = `${names[randomName]} ${surnames[randomSurname]}`; 
    // LI METTO IN LISTA
    gatsby[i]=nameSurname;
    i++;
}
console.table(gatsby)
    // CONTROLLO CHE NON SIA IL LISTA
    
// STAMPO 