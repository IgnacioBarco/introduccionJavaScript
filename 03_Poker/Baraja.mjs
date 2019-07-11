export class Baraja {
    constructor() {
        this.cartas = [
            "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "TS", "JS", "QS", "KS", "AS",
            "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "TH", "JH", "QH", "KH", "AH",
            "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "TC", "JC", "QC", "KC", "AC",
            "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "TD", "JD", "QD", "KD", "AD",
        ]
    }

    //obtenemos 5 cartas aleatorias, y las que damos las quitamos del array
    obtenerCartas() {
        let cartasDevueltas = [];
        
        for (let i = 0; i < 5; i++) {
            let posicion = Math.floor(Math.random() * this.cartas.length);
            cartasDevueltas.push(this.cartas[posicion]);
            this.cartas.splice(posicion, 1);

        }
        return cartasDevueltas;
    }
}


