export class Poker {

    constructor(cartasJugador1, cartasJugador2) {
        this.cartasJugador1 = cartasJugador1;
        this.cartasJugador2 = cartasJugador2;

        this.resultadoFinal = "";

        let contador = 0;

        // para ordenar las cartas y darles un valor de referencia
        let valorCartas = {
            "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7,
            "8": 8, "9": 9, "T": 10, "J": 11, "Q": 12, "K": 13, "A": 14
        }

        this.evaluacionManoJ1 = {
            "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0,
            "8": 0, "9": 0, "T": 0, "J": 0, "Q": 0, "K": 0, "A": 0,
            //palo
            "S": 0, "H": 0, "C": 0, "D": 0, "color": false,
            //coincidente
            "pareja": false, "valorPareja": 0,
            "doblePareja": false, "valorDoblePareja": [0, 0],
            "trio": false, "valorTrio": 0,
            "poker": false, "valorPoker": 0,
            "escalera": false, "valorEscalera": [0, 0, 0, 0, 0],
            "valorCartaAlta": 0,
            "valorMano": 0,
            "jugada": ""

        }

        this.evaluacionManoJ2 = {
            "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0,
            "8": 0, "9": 0, "T": 0, "J": 0, "Q": 0, "K": 0, "A": 0,
            //palo
            "S": 0, "H": 0, "C": 0, "D": 0, "color": false,
            //coincidente
            "pareja": false, "valorPareja": 0,
            "doblePareja": false, "valorDoblePareja": [0, 0],
            "trio": false, "valorTrio": 0,
            "poker": false, "valorPoker": 0,
            "escalera": false, "valorEscalera": [0, 0, 0, 0, 0],
            "valorCartaAlta": 0,
            "valorMano": 0,
            "jugada": ""
        }

        // ordenamos las manos de los jugadores
        this.cartasJugador1.sort(function (a, b) {
            if (valorCartas[a[0].toString()] > valorCartas[b[0].toString()]) {
                return 1;
            } else {
                return -1;
            }
        });

        this.cartasJugador2.sort(function (a, b) {
            if (valorCartas[a[0].toString()] > valorCartas[b[0].toString()]) {
                return 1;
            } else {
                return -1;
            }
        });


        // evaluamos las cartas del jugador 1
        this.cartasJugador1.forEach(carta => {
            // contamos cada carta y su color
            this.evaluacionManoJ1[carta[0]]++;
            this.evaluacionManoJ1[carta[1]]++;

            // anotamos el valor de cada carta para verificar si hay escalera
            // y tambien para comprobar cual es la mayor carta cuando no hay ni pareja
            this.evaluacionManoJ1["valorEscalera"][contador] =
                valorCartas[carta[0]];

            // si hemos contado 2 cartas iguales y ya habia otra pareja     
            if (this.evaluacionManoJ1[carta[0]] == 2 &&
                this.evaluacionManoJ1["pareja"] == true) {
                this.evaluacionManoJ1["doblePareja"] = true;
                this.evaluacionManoJ1["valorDoblePareja"][1] = 2 * valorCartas[carta[0]];

                // si encontramos una pareja. preparamos la doble pareja por si encontramos
                // otra pareja despues        
            } else if (this.evaluacionManoJ1[carta[0]] == 2) {
                this.evaluacionManoJ1["pareja"] = true;
                this.evaluacionManoJ1["valorPareja"] = 2 * valorCartas[carta[0]];
                this.evaluacionManoJ1["valorDoblePareja"][0] = 2 * valorCartas[carta[0]];

            }

            // si encontramos tres cartas iguales
            if (this.evaluacionManoJ1[carta[0]] == 3) {
                this.evaluacionManoJ1["trio"] = true;
                this.evaluacionManoJ1["valorTrio"] = 3 * valorCartas[carta[0]];

                // si habia una pareja anterior, ponemos a false la pareja para que no
                // haya problemas con el Full
                if (this.evaluacionManoJ1["valorPareja"] = 2 * valorCartas[carta[0]]) {
                    this.evaluacionManoJ1["pareja"] = false;
                }

            }

            // si encontramos cuatro cartas iguales
            if (this.evaluacionManoJ1[carta[0]] == 4) {
                this.evaluacionManoJ1["poker"] = true;
                this.evaluacionManoJ1["valorPoker"] = 4 * valorCartas[carta[0]];

            }

            //si es la última carta a evaluar
            if (contador === 4) {
                //la ponemos como valor de la carta mas alta ya que estan ordenadas
                this.evaluacionManoJ1["valorCartaAlta"] = valorCartas[carta[0]];

                // si las 5 tienen el mismo color
                if (this.evaluacionManoJ1["S"] === 5 ||
                    this.evaluacionManoJ1["H"] === 5 ||
                    this.evaluacionManoJ1["C"] === 5 ||
                    this.evaluacionManoJ1["D"] === 5) {
                    this.evaluacionManoJ1["color"] = true;

                }

                // validamos si hay escalera
                if (this.evaluacionManoJ1["valorEscalera"][4] - this.evaluacionManoJ1["valorEscalera"][3] === 1 &&
                    this.evaluacionManoJ1["valorEscalera"][3] - this.evaluacionManoJ1["valorEscalera"][2] === 1 &&
                    this.evaluacionManoJ1["valorEscalera"][2] - this.evaluacionManoJ1["valorEscalera"][1] === 1 &&
                    this.evaluacionManoJ1["valorEscalera"][1] - this.evaluacionManoJ1["valorEscalera"][0] === 1) {
                    this.evaluacionManoJ1["escalera"] = true;

                }

            }
            contador++;
        });

        contador = 0;

        // evaluamos las cartas del jugador 2 (hacemos lo mismo que el jugador 1)
        this.cartasJugador2.forEach(carta => {
            this.evaluacionManoJ2[carta[0]]++;
            this.evaluacionManoJ2[carta[1]]++;

            this.evaluacionManoJ2["valorEscalera"][contador] =
                valorCartas[carta[0]];

            if (this.evaluacionManoJ2[carta[0]] == 2 &&
                this.evaluacionManoJ2["pareja"] == true) {
                this.evaluacionManoJ2["doblePareja"] = true;
                this.evaluacionManoJ2["valorDoblePareja"][1] = 2 * valorCartas[carta[0]];


            } else if (this.evaluacionManoJ2[carta[0]] == 2) {
                this.evaluacionManoJ2["pareja"] = true;
                this.evaluacionManoJ2["valorPareja"] = 2 * valorCartas[carta[0]];
                this.evaluacionManoJ2["valorDoblePareja"][0] = 2 * valorCartas[carta[0]];

            }

            if (this.evaluacionManoJ2[carta[0]] == 3) {
                this.evaluacionManoJ2["trio"] = true;
                this.evaluacionManoJ2["valorTrio"] = 3 * valorCartas[carta[0]];

                if (this.evaluacionManoJ2["valorPareja"] = 2 * valorCartas[carta[0]]) {
                    this.evaluacionManoJ2["pareja"] = false;
                }

            }

            if (this.evaluacionManoJ2[carta[0]] == 4) {
                this.evaluacionManoJ2["poker"] = true;
                this.evaluacionManoJ2["valorPoker"] = 4 * valorCartas[carta[0]];

            }

            if (contador === 4) {
                this.evaluacionManoJ2["valorCartaAlta"] = valorCartas[carta[0]];

                if (this.evaluacionManoJ2["S"] === 5 ||
                    this.evaluacionManoJ2["H"] === 5 ||
                    this.evaluacionManoJ2["C"] === 5 ||
                    this.evaluacionManoJ2["D"] === 5) {
                    this.evaluacionManoJ2["color"] = true;
                }

                if (this.evaluacionManoJ2["valorEscalera"][4] - this.evaluacionManoJ2["valorEscalera"][3] === 1 &&
                    this.evaluacionManoJ2["valorEscalera"][3] - this.evaluacionManoJ2["valorEscalera"][2] === 1 &&
                    this.evaluacionManoJ2["valorEscalera"][2] - this.evaluacionManoJ2["valorEscalera"][1] === 1 &&
                    this.evaluacionManoJ2["valorEscalera"][1] - this.evaluacionManoJ2["valorEscalera"][0] === 1) {
                    this.evaluacionManoJ2["escalera"] = true;

                }

            }
            contador++;
        });

    }


    mostrarEntrada() {
        return `Jugador 1: ${this.cartasJugador1}  -  Jugador2: ${this.cartasJugador2}`
    }


    evaluarJugada(evaluacionMano) {
        // Straight flush(Escalera de Color): 5 cartas de la misma cara pero con 
        // valores consecutivos.En caso de tener escalera las dos manos entonces 
        // gana el que tenga el valor más alto.
        if (evaluacionMano["escalera"] === true &&
            evaluacionMano["color"] === true) {
            evaluacionMano["valorMano"] = 9000000 + evaluacionMano["valorCartaAlta"];
            evaluacionMano["jugada"] = "Escalera de color";


            // Four of a Kind(Poker): 4 cartas con el mismo valor.En caso de tener 
            // ambas manos poker gana el que tenga el valor más alto.
        } else if (evaluacionMano["poker"] === true) {
            evaluacionMano["valorMano"] = 8000000 + evaluacionMano["valorPoker"];
            evaluacionMano["jugada"] = "Poker";


            // Full House(Full): La mano tiene un trío y una pareja.En caso de tener 
            // ambas manos full entonces gana el que tenga el trío más alto. 
        } else if (evaluacionMano["trio"] === true &&
            evaluacionMano["pareja"] === true) {
            evaluacionMano["valorMano"] = 7000000 + evaluacionMano["valorTrio"];
            evaluacionMano["jugada"] = "Full";


            // Flush(Color): La mano tiene 5 cartas con la misma cara.Si ambas manos 
            // tienen color entonces gana el que tenga la carta más alta. 
        } else if (evaluacionMano["color"] === true) {
            evaluacionMano["valorMano"] = 6000000 + evaluacionMano["valorCartaAlta"];
            evaluacionMano["jugada"] = "color";


            // Straight(Escalera): La mano contiene 5 cartas consecutivas.Si las dos 
            // manos tienen escalera entonces gana la que tiene la carta más alta. 
        } else if (evaluacionMano["escalera"] === true) {
            evaluacionMano["valorMano"] = 5000000 + evaluacionMano["valorCartaAlta"];
            evaluacionMano["jugada"] = "Escalera";


            // Three of a Kind(Trio): 3 cartas de la mano tienen el mismo valor.Gana 
            // la mano que tiene las 3 cartas con mayor valor. 
        } else if (evaluacionMano["trio"] === true) {
            evaluacionMano["valorMano"] = 4000000 + evaluacionMano["valorTrio"];
            evaluacionMano["jugada"] = "trio";


            // Two Pairs(Dobles Parejas): La mano contiene 2 parejas diferentes.Si 
            // las dos manos tienen dobles parejas diferentes entonces gana aquella 
            // que tenga la pareja más alta.Si las dos manos tienen las mismas parejas 
            // entonces se compara la otra pareja.Si ambas manos tiene las mismas 
            // parejas entonces gana el que tenga la carta más alta restante. 
        } else if (evaluacionMano["doblePareja"] === true) {
            evaluacionMano["valorMano"] =
                3000000
                + (1000 * evaluacionMano["valorDoblePareja"][1] / 2)
                + (100 * evaluacionMano["valorDoblePareja"][0] / 2)
                + evaluacionMano["valorCartaAlta"];
            evaluacionMano["jugada"] = "dobles parejas";


            // Pair(Parejas): 2 de las 5 cartas de la mano tienen el mismo valor. Si 
            // las dos manos tienen pareja, entonces gana la que tenga la pareja más 
            // alta.Si ambas parejas son iguales entonces gana el que tenga la carta 
            // más alta. 
        } else if (evaluacionMano["pareja"] === true) {
            evaluacionMano["valorMano"] =
                2000000
                + 100 * evaluacionMano["valorPareja"]
                + evaluacionMano["valorCartaAlta"];
            evaluacionMano["jugada"] = "pareja";
            return "hay pareja"


            // High Card(Carta Más Alta): Para manos que no entran en ninguna de las 
            // manos superior, el ganador es aquel que tiene la carta más alta. Si se 
            // produce un empate entonces se compara la siguiente carta más alta y 
            // así sucesivamente. 
        } else {
            evaluacionMano["valorMano"] = 1000;
            evaluacionMano["jugada"] = "carta mas alta";

        }
    }

    compararManos() {
        let i = 4;
        let ver = false;

        // si las dos manos no tienen nada
        if (this.evaluacionManoJ1["valorMano"] === 1000 &&
            this.evaluacionManoJ2["valorMano"] === 1000) {
            do {
                // comparamos las cartas de una en una hasta que llegamos a la 
                // ultima, y si son iguales salimos diciendo que hay empate
                if (this.evaluacionManoJ1["valorEscalera"][i]
                    > this.evaluacionManoJ2["valorEscalera"][i]) {
                    this.resultadoFinal =
                        "Gana el jugador 1 con la " + this.evaluacionManoJ1["jugada"];
                    ver = true;

                } else if (this.evaluacionManoJ1["valorEscalera"][i]
                    < this.evaluacionManoJ2["valorEscalera"][i]) {
                    this.resultadoFinal =
                        "Gana el jugador 2 con la " + this.evaluacionManoJ1["jugada"];
                    ver = true;

                } else if (i === 0) {
                    this.resultadoFinal =
                        "Hay empate con " + this.evaluacionManoJ1["jugada"];
                    ver = true;
                }

                i--;

            } while (!ver);


        } else {
            // evaluamos quien ha ganado mediente el valor que le hemos puesto
            // al evaluar las manos de los jugadores
            if (this.evaluacionManoJ1["valorMano"] > this.evaluacionManoJ2["valorMano"]) {
                this.resultadoFinal =
                    "Gana el jugador 1 con " + this.evaluacionManoJ1["jugada"]

            } else if (this.evaluacionManoJ1["valorMano"] < this.evaluacionManoJ2["valorMano"]) {
                this.resultadoFinal =
                    "Gana el jugador 2 con " + this.evaluacionManoJ2["jugada"]

            } else {
                this.resultadoFinal =
                    "Hay empate " + this.evaluacionManoJ1["jugada"]

            }
        }

        return this.resultadoFinal;
    }
}