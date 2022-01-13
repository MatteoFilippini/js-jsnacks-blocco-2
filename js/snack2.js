/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

// CHIEDO IL NUMERO
let num = parseInt(prompt('Inserisci un numero'));
// SE NON E DISPARI AGGIUNGO 1 
if (!(num % 2 === 0)) {
    num++;
}
// STAMPO
console.log(num);