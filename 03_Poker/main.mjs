// node --experimental-modules main.mjs

import { Baraja } from './Baraja.mjs';
import { Poker } from './Poker.mjs';

console.log("\n---Cartas iautomáticas---");
let cartas = new Baraja();
let juego = new Poker(cartas.obtenerCartas(), cartas.obtenerCartas());
console.log(juego.mostrarEntrada());
juego.evaluarJugada(juego.evaluacionManoJ1);
juego.evaluarJugada(juego.evaluacionManoJ2);
console.log(juego.compararManos());

console.log("\n---Cartas introducidas manualmente---");
let juego2 = new Poker(
    ['2S', '4S', '6C', '7S', 'AS'],
    ['3C', '4C', '6C', '7C', 'AS']);

console.log(juego2.mostrarEntrada());
juego2.evaluarJugada(juego2.evaluacionManoJ1);
juego2.evaluarJugada(juego2.evaluacionManoJ2);
console.log(juego2.compararManos());
