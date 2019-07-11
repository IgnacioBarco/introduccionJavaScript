// node --experimental-modules main.mjs

import { Baraja } from './Baraja.mjs';
import { Poker } from './Poker.mjs';

console.log("\n---Cartas automáticas---");
let cartas = new Baraja();
let juego = new Poker(cartas.obtenerCartas(), cartas.obtenerCartas());
console.log(juego.mostrarEntrada());
juego.evaluarJugada(juego.evaluacionManoJ1);
juego.evaluarJugada(juego.evaluacionManoJ2);
console.log(juego.compararManos());

console.log("\n---Cartas introducidas manualmente---");
let juego2 = new Poker(
    ['4D', '5D', '6D', '7D', '8D'],
    ['4S', '5S', '6S', '7S', '8S']);

console.log(juego2.mostrarEntrada());
juego2.evaluarJugada(juego2.evaluacionManoJ1);
juego2.evaluarJugada(juego2.evaluacionManoJ2);
console.log(juego2.compararManos());

// console.log(juego2.evaluacionManoJ1);
//  console.log(juego2.evaluacionManoJ2);


