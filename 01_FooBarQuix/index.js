function validacionDatos(numero) {
    let valido = false;

    try {
        if (Number.isInteger(numero)) {
            if (numero > 0 && numero <= 100) {
                valido = true;

            } else {
                throw numero + " no esta comprendido entre el 1 y 100";

            }

        } else {
            throw "\"" + numero + "\"" + " no es un dato numerico válido";

        }

    } catch (error) {
        console.log(error);

    } finally {
        return valido;

    }
}


function calcularDivisible(num) {
    let resultado = "";

    if (num % 3 == 0) { resultado += "Foo"; }
    if (num % 5 == 0) { resultado += "Bar"; }
    if (num % 7 == 0) { resultado += "Quix"; }

    return resultado;

}

function calcularDigito(num) {
    if (num == 3) {
        return "Foo";

    } else if (num == 5) {
        return "Bar";

    } else if (num == 7) {
        return "Quix";

    } else {
        return "";

    }
}

function calcularSalida(numero) {
    let flecha = "";
    let resultado = "";
    let numeroString = numero.toString();

    resultado += calcularDivisible(numero);

    if (numero < 10) {
        flecha = "  -> ";
        resultado += calcularDigito(numero);

    } else {
        /* El numero 100, lo tratamos igual ya que daria igual la tercera cifra.
        Si fuesen mas de 100 habria que meterlos dentro de otra condición >99 */
        flecha = " -> ";
        resultado += calcularDigito(parseInt(numeroString[0]));
        resultado += calcularDigito(parseInt(numeroString[1]));

    }

    if (resultado !== "") {
        return numero + flecha + resultado;

    } else {
        return numero + flecha + numeroString;

    }

}

function calcularResultado(numero) {
    if (validacionDatos(numero)) {
        console.log(calcularSalida(numero));
    }

}


/* Ejemplos */
console.log("Ejemplos");
console.log("--------");
calcularResultado(1);
calcularResultado(2);
calcularResultado(3);
calcularResultado(4);
calcularResultado(5);
calcularResultado(6);
calcularResultado(7);
calcularResultado(8);
calcularResultado(9);
calcularResultado(10);
calcularResultado(13);
calcularResultado(15);
calcularResultado(21);
calcularResultado(33);
calcularResultado(51);
calcularResultado(53);
calcularResultado(75);

/* valores erroneos */
console.log("\nValores erroneos");
console.log("----------------");
calcularResultado("fdfsdfssfd");
calcularResultado(-7);
calcularResultado(105);
calcularResultado(57.5);
calcularResultado(0.01);