/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

// CHIEDO IL NUMERO FINTNTANTO CHE E UN NUMERO
let num;
do {
    num = parseInt(prompt('Inserisci un numero'));
} while (isNaN(num))
// SE NON E DISPARI AGGIUNGO 1 
if (!(num % 2 === 0)) {
    num++;
}
// STAMPO
console.log(num);


