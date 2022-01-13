/*Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.*/

// CREO LE VARIABILI NUM,SUM
let sumFor = 0;
let sumWhile = 0;
let i = 1;

// FINO A QUANDO NON ARRIVO A 5 NUMERI CHIEDI UN NUMERO E SOMMA
while (i <= 5) {
    const num = parseInt(prompt(`Inserisci il ${i} numero`, 5).trim());
    sumWhile += num;
    i++;
}

// OGNI VOLTA SOMMO IL NUMERO ALLA SOMMA PER 5 VOLTE
for (let k = 1; k <= 5; k++) {
    const num = parseInt(prompt(`Inserisci il ${k} numero`, 5).trim());
    sumFor += num;
}

// STAMPO LA SOMMA
console.log("somma-for" + sumFor);
console.log("somma-while" + sumWhile);
