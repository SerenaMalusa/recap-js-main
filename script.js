// 1. Scambia il contenuto di due variabili a e b, in modo che la prima contenga il valore contenuto nella seconda:
let a = "montagna";
let b = "mare";

console.log('prima a:', a, 'b:', b);

let c = a;
a = b;
b = c;

console.log('dopo a:', a, 'b:', b);

// 2. Stampa questo bellissimo alberello in console:
const printElm = document.querySelector('.print');
//console.log(printElm);

let asterischi = '';
let alberello = ``;
for (i=0; i < 6; i++) {
    asterischi += '*';
    //console.log(asterischi);
    alberello += `${asterischi}<br />`
}

//console.log(alberello + '||');
printElm.innerHTML = alberello + '||';


// 3. Dato questo array di numeri crea due array, uno con tutti i numeri pari e l'altro con tutti quelli dispari
const numeri = [4, 5, 3,1, 11, 21, 23, 0 , 2, 44, 19, 99, 100, 2, 3, 1]
const pari = [];
const dispari = [];

for ( i = 0; i < numeri.length; i++){
    numero = numeri[i];

    if (numero % 2 === 0) {
        pari.push(numero);
    } else {
        dispari.push(numero);
    }
}

console.log('pari ' + pari);
console.log('dispari ' + dispari);

// 5. Scrivi un ciclo for che stampa in console il countdown da 10 a 0, poi trasforma il ciclo for in un ciclo while.

for (i=10; i >= 0; i--) {
    console.log('for: '+i);
}

let y = 10;
while (y >= 0) {
    console.log('while '+y);
    y--;
}

// 4. Dato questo array di nomi ordinato in ordine alfabetico, trova la prima persona fuori posto.
const nomi = ["Amelia", "Ciro","Edoardo", "Danilo", "Giovanni", "Guido", "Lucia", "Marco", "Bastiano", "Ottavia", "Zeno"];

// let misura = nomi[2] > nomi[1];
// console.log(misura);
let nomeSbagliato = '';

// for (i=0; i < nomi.length; i++) {
//     let nomeCorrente = nomi[i];
//     let nomeSucc = nomi[i+1];

//     if (nomeSucc < nomeCorrente ) {
//         nomeSbagliato = nomeSucc;
//     }

// }

let ciclo = 0;
while (ciclo < nomi.length && !nomeSbagliato) {
    let nomeCorrente = nomi[ciclo];
    let nomeSucc = nomi[ciclo+1];

    if (nomeSucc < nomeCorrente ) {
        nomeSbagliato = nomeSucc;
    }

    ciclo++;
}

console.log(nomeSbagliato);

// 5. super bonus - Data una stringa contenente una frase stampane la cornicetta
let frase = "il mattino ha l'oro in bocca"

const parole = frase.split(' ');
//console.log(parole);

const stelline = '***********';
console.log(stelline);

for (i=0; i < parole.length; i++) {
    let parola = parole[i];
    
    console.log('* '+ parola + ' *');
}

console.log(stelline);