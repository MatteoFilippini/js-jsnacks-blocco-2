/*Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.*/

// CREO LE VARIABILI NUM,SUM

let sum = 0;

// OGNI VOLTA SOMMO IL NUMERO ALLA SOMMA PER 5 VOLTE
for (let i = 0; i < 5; i++) {
    const num = parseInt(prompt('Inserisci un numero', 5).trim());
    sum += num;
}

// STAMPO LA SOMMA
console.log(sum);
