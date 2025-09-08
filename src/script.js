
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
