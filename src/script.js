
let citta = "Palermo";
console.log("1. La città è:", citta);


const pi = 3.14;
console.log("2. Il valore di pi è:", pi);

try {
    pi = 3.1416;
} catch (error) {
    console.log("Errore riassegnando pi:", error.message);
}


let temperatura = 25;
console.log("3. La temperatura è", temperatura, "gradi");


let vuota;
console.log("4. Il valore della variabile vuota è:", vuota);


let numero = 42;
let parola = "ciao";
let flag = false;
let nulla = null;
let nonDefinito;

console.log("5. Tipo di numero:", typeof numero);
console.log("5. Tipo di parola:", typeof parola);
console.log("5. Tipo di flag:", typeof flag);
console.log("5. Tipo di nulla:", typeof nulla);
console.log("5. Tipo di nonDefinito:", typeof nonDefinito);


// OPERATORI

// 1. Operazioni matematiche base
console.log("1. 7 + 5 =", 7 + 5);
console.log("1. 10 - 3 =", 10 - 3);
console.log("1. 4 * 6 =", 4 * 6);
console.log("1. 20 / 4 =", 20 / 4);

// 2. Calcola il resto di 17 % 3
console.log("2. 17 % 3 =", 17 % 3);

// 3. Usa += per sommare 10 a una variabile
let punti = 50;
punti += 10;
console.log("3. Punti dopo += 10:", punti);

// 4. Confronti
console.log("4. 5 == '5'", 5 == "5");
console.log("4. 5 === '5'", 5 === "5");
console.log("4. 5 != 7", 5 != 7);
console.log("4. 8 !== '8'", 8 !== "8"); 


// CONDIZIONI 

// 1. Controllo maggiorenne o minorenne
let eta = 20;
if (eta >= 18) {
  console.log("1. Maggiorenne");
} else {
  console.log("1. Minorenne");
}

// 2. Valutazione voto
let voto = 30;
if (voto === 30) {
  console.log("2. Ottimo");
} else if (voto >= 18) {
  console.log("2. Buono");
} else {
  console.log("2. Insufficiente");
}

// 3. Saluto in base all'ora
let ora = 9; 
if (ora < 12) {
  console.log("3. Buongiorno");
} else if (ora < 18) {
  console.log("3. Buon pomeriggio");
} else {
  console.log("3. Buonasera");
}


// CICLI

// 1. Stampa i numeri da 1 a 20 con un ciclo for
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Stampa i numeri pari da 2 a 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 3. Con un ciclo while stampa i numeri da 10 a 1 (conto alla rovescia)
let n = 10;
while (n >= 1) {
  console.log(n);
  n--;
}

// 4. Con un ciclo for stampa la tabellina del 5 (da 5x1 a 5x10)
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}

// 5. Somma i numeri da 1 a 100 con un ciclo for
let somma = 0;
for (let i = 1; i <= 100; i++) {
  somma += i;
}
console.log("Somma da 1 a 100 =", somma);


// FUNZIONI 

// 1. Funzione saluta
function saluta() {
  console.log("Ciao!");
}

// 2. Funzione somma
function ESsomma(a, b) {
  return a + b;
}

// 3. Funzione moltiplica
function moltiplica(a, b) {
  return a * b;
}

// 4. Funzione isPari
function isPari(numero) {
  return numero % 2 === 0;
}

// 5. Funzione quadrato
function quadrato(numero) {
  return numero * numero;
}

// 6. Funzione presentati
function presentati(nome, eta) {
  console.log("Ciao, mi chiamo " + nome + " e ho " + eta + " anni");
}

// Test delle funzioni
saluta();
console.log("Somma 5 + 3 =", ESsomma(5, 3));
console.log("Moltiplica 4 * 6 =", moltiplica(4, 6));
console.log("Il numero 10 è pari?", isPari(10));
console.log("Quadrato di 7 =", quadrato(7));
presentati("Mario", 25);
