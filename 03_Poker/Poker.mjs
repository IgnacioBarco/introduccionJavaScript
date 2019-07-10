export class Poker {
    constructor(cartasJugador1, cartasJugador2) {
        this.cartasJugador1 = cartasJugador1;
        this.cartasJugador2 = cartasJugador2;

        this.valorCartas = {
            "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7,
            "8": 8, "9": 9, "T": 10, "J": 11, "Q": 12, "K": 13, "A": 14
        }

        this.contadorCartas = {
            "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0,
            "8": 0, "9": 0, "T": 0, "J": 0, "Q": 0, "K": 0, "A": 0,
            //palo
            "S": 0, "H": 0, "C": 0, "D": 0
        }

        // ordenar()

        // contadorCartas() -- para parejas-trios-poker... color...

        //comprobar jugada
        this.resultadoJugador1 = this.comprobarJugada(this.cartasJugador1);
        this.resultadoJugador2 = this.comprobarJugada(this.cartasJugador2);
    }

    mostrarEntrada() {
        return `Jugador 1: ${this.cartasJugador1}  -  Jugador2: ${this.cartasJugador2}`
    }

    comprobarJugada(cartas) {

        this.cartas = cartas;

        // Straight flush(Escalera de Color): 5 cartas de la misma cara pero con 
        // valores consecutivos.En caso de tener escalera las dos manos entonces 
        // gana el que tenga el valor más alto.
        if (cartas[0][1] === cartas[4][1] &&
            cartas[1][1] === cartas[4][1] &&
            cartas[2][1] === cartas[4][1] &&
            cartas[3][1] === cartas[4][1]
            && cartas[0][0] === "2") {
            return "hay escalera de color"


            // Four of a Kind(Poker): 4 cartas con el mismo valor.En caso de tener 
            // ambas manos poker gana el que tenga el valor más alto.

            // Full House(Full): La mano tiene un trío y una pareja.En caso de tener 
            // ambas manos full entonces gana el que tenga el trío más alto. 

            // Flush(Color): La mano tiene 5 cartas con la misma cara.Si ambas manos 
            // tienen color entonces gana el que tenga la carta más alta. 
        } else if (
            cartas[0][1] === cartas[4][1] &&
            cartas[1][1] === cartas[4][1] &&
            cartas[2][1] === cartas[4][1] &&
            cartas[3][1] === cartas[4][1]) {
            return "hay color"
        } else {
            return this.valorCartas[cartas[4][0]]
        }


        // Straight(Escalera): La mano contiene 5 cartas consecutivas.Si las dos 
        // manos tienen escalera entonces gana la que tiene la carta más alta. 

        // Three of a Kind(Trio): 3 cartas de la mano tienen el mismo valor.Gana 
        // la mano que tiene las 3 cartas con mayor valor. 

        // Two Pairs(Dobles Parejas): La mano contiene 2 parejas diferentes.Si 
        // las dos manos tienen dobles parejas diferentes entonces gana aquella 
        // que tenga la pareja más alta.Si las dos manos tienen las mismas parejas 
        // entonces se compara la otra pareja.Si ambas manos tiene las mismas 
        // parejas entonces gana el que tenga la carta más alta restante. 

        // Pair(Parejas): 2 de las 5 cartas de la mano tienen el mismo valor. Si 
        // las dos manos tienen pareja, entonces gana la que tenga la pareja más 
        // alta.Si ambas parejas son iguales entonces gana el que tenga la carta 
        // más alta. 

        // High Card(Carta Más Alta): Para manos que no entran en ninguna de las 
        // manos superior, el ganador es aquel que tiene la carta más alta. Si se 
        // produce un empate entonces se compara la siguiente carta más alta y 
        // así sucesivamente. 
    }
}