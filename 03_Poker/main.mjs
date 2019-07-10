// node --experimental-modules main.mjs

import {Baraja} from './Baraja.mjs';
import {Poker} from './Poker.mjs';

let cartas = new Baraja();

let juego = new Poker(cartas.obtenerCartas(), cartas.obtenerCartas());

console.log(juego.mostrarEntrada());
console.log(juego.resultadoJugador1);
console.log(juego.resultadoJugador2);



