let valoresRomanos = {
    /*miles*/
    "m1": "M", "m2": "MM", "m3": "MMM",
    /*centenas*/
    "c0": "", "c1": "C", "c2": "CC", "c3": "CCC", "c4": "CD",
    "c5": "D", "c6": "DC", "c7": "DCC", "c8": "DCCC", "c9": "CM",
    /*decenas*/
    "d0": "", "d1": "X", "d2": "XX", "d3": "XXX", "d4": "XL",
    "d5": "L", "d6": "LX", "d7": "LXX", "d8": "LXXX", "d9": "XC",
    /*unidades*/
    "u0": "", "u1": "I", "u2": "II", "u3": "III", "u4": "IV",
    "u5": "V", "u6": "VI", "u7": "VII", "u8": "VIII", "u9": "IX"

}

function validadorNumRomanos(numeroRomano) {
    let expreg = /^([M]{0,3})(C{1,3}|CD|DC{0,3}|CM)?(X{0,3}|XL|LX{0,3}|XC)?(I{0,3}|IV|VI{0,3}|IX)?$/;

    if (expreg.test(numeroRomano)) {
        return "El numero romano " + numeroRomano + " es correcto";

    } else {
        return "El numero romano " + numeroRomano + " no es válido";

    }


}

function pasarNumRomanosAArabes(numeroRomano) {

    let resultado = 0;
    let resultadoString = "";
    let fin = false;
    let arrayNum = Array.from(numeroRomano);
    let arrayAux1 = [""];
    let arrayAux2 = [""];
    let arrayAux3 = [""];
    let arrayAux4 = [""];


    do {
        // console.log(arrayNum + " - " + arrayNum.length + "  - " + arrayAux4.length);

        for (let valor of Object.values(valoresRomanos)) {

            if (arrayNum[0] + arrayNum[1] + arrayNum[2] + arrayNum[3] === valor
                && arrayNum.length >= 4
                && arrayAux4[0] === "") {

                for (let key of Object.keys(valoresRomanos)) {
                    if (valoresRomanos[key] === valor) {
                        arrayAux4[0] = key;
                    }

                }

            } else if (arrayNum[0] + arrayNum[1] + arrayNum[2] === valor
                && arrayNum.length >= 3
                && arrayAux4[0] === ""
                && arrayAux3[0] === "") {

                for (let key of Object.keys(valoresRomanos)) {
                    if (valoresRomanos[key] === valor) {
                        arrayAux3[0] = key;
                    }

                }

            } else if (arrayNum[0] + arrayNum[1] === valor
                && arrayNum.length >= 2
                && arrayAux4[0] === ""
                && arrayAux3[0] === ""
                && arrayAux2[0] === "") {

                for (let key of Object.keys(valoresRomanos)) {
                    if (valoresRomanos[key] === valor) {
                        arrayAux2[0] = key;
                    }

                }

            } else if (arrayNum[0] === valor
                && arrayNum.length >= 1
                && arrayAux4[0] === ""
                && arrayAux3[0] === ""
                && arrayAux2[0] === ""
                && arrayAux1[0] === "") {

                for (let key of Object.keys(valoresRomanos)) {
                    if (valoresRomanos[key] === valor) {
                        arrayAux1[0] = key;
                    }

                }

            }
        }




        if (arrayAux4[0] !== "") {
            resultadoString = arrayAux4[0].toString();
            arrayNum.splice(0, 4);

        } else if (arrayAux3[0] !== "") {
            resultadoString = arrayAux3[0].toString();
            arrayNum.splice(0, 3);

        } else if (arrayAux2[0] !== "") {
            resultadoString = arrayAux2[0].toString();
            arrayNum.splice(0, 2);

        } else if (arrayAux1[0] !== "") {
            resultadoString = arrayAux1[0].toString();
            arrayNum.shift();
        }



        switch (resultadoString[0]) {
            case "m":
                resultado += 1000 * parseInt(resultadoString[1]);
                break;
            case "c":
                resultado += 100 * parseInt(resultadoString[1]);
                break;
            case "d":
                resultado += 10 * parseInt(resultadoString[1]);
                break;
            case "u":
                resultado += parseInt(resultadoString[1]);
                break;


        }

        arrayAux1 = [""];
        arrayAux2 = [""];
        arrayAux3 = [""];
        arrayAux4 = [""];

        // console.log("sumamos " + resultado + " de " + resultadoString)

        if (arrayNum.length === 0) {
            fin = true;
        }



    } while (!fin);

    return "El numero romano " + numeroRomano + " es " + resultado;
}

function pasarNumArabesARomanos(numeroArabe) {
    let tipo = "";
    let n = 0;
    let numeroString = numeroArabe.toString();
    let resultado = "";

    if (numeroArabe <= 4000 && numeroArabe >= 1000) {
        tipo = "m";
    } else if (numeroArabe < 1000 && numeroArabe >= 100) {
        tipo = "c";
    } else if (numeroArabe < 100 && numeroArabe >= 10) {
        tipo = "d";
    } else {
        tipo = "u";
    }

    switch (tipo) {
        case "m":
            resultado += valoresRomanos[tipo + numeroString[n].toString()];
            tipo = "c";
            n++;

        case "c":
            resultado += valoresRomanos[tipo + numeroString[n].toString()];
            tipo = "d";
            n++;

        case "d":
            resultado += valoresRomanos[tipo + numeroString[n].toString()];
            tipo = "u";
            n++;

        case "u":
            resultado += valoresRomanos[tipo + numeroString[n].toString()];
            break;


    }

    return numeroString + " es en romano " + resultado;
}



console.log("\n" + pasarNumArabesARomanos(89));
console.log(pasarNumRomanosAArabes("LXXXIX"));
console.log(validadorNumRomanos("LXXXIX"));

console.log("\n" + pasarNumArabesARomanos(133));
console.log(pasarNumRomanosAArabes("CXXXIII"));
console.log(validadorNumRomanos("CXXXIII"));

console.log("\n" + pasarNumArabesARomanos(470));
console.log(pasarNumRomanosAArabes("CDLXX"));
console.log(validadorNumRomanos("CDLXX"));

console.log("\n" + pasarNumArabesARomanos(850));
console.log(pasarNumRomanosAArabes("DCCCL"));
console.log(validadorNumRomanos("DCCCL"));

console.log("\n" + pasarNumArabesARomanos(1147));
console.log(pasarNumRomanosAArabes("MCXLVII"));
console.log(validadorNumRomanos("MCXLVII"));

console.log("\n" + pasarNumArabesARomanos(2758));
console.log(pasarNumRomanosAArabes("MMDCCLVIII"));
console.log(validadorNumRomanos("MMDCCLVIII"));

console.log("\n" + pasarNumArabesARomanos(3121));
console.log(pasarNumRomanosAArabes("MMMCXXI"));
console.log(validadorNumRomanos("MMMCXXI"));

console.log("\n" + pasarNumArabesARomanos(3333));
console.log(pasarNumRomanosAArabes("MMMCCCXXXIII"));
console.log(validadorNumRomanos("MMMCCCXXXIII"));

console.log("\n" + pasarNumArabesARomanos(3650));
console.log(pasarNumRomanosAArabes("MMMDCL"));
console.log(validadorNumRomanos("MMMDCL"));

console.log("\n" + pasarNumArabesARomanos(3734));
console.log(pasarNumRomanosAArabes("MMMDCCXXXIV"));
console.log(validadorNumRomanos("MMMDCCXXXIV"));

console.log("\n----numeros-romanos-mal---")
console.log(validadorNumRomanos("CCDXCXXCIXC"));
console.log(validadorNumRomanos("MXMXMDCCXXXIVX"));
console.log(validadorNumRomanos("MMDICCXXXIV"));



