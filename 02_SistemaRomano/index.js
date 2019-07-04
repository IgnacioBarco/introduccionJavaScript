function validadorNumRomanos(numeroRomano) {

}

function pasarNumRomanosAArabes(numeroRomano) {

}

function pasarNumArabesARomanos(numeroArabe) {
    let tipo = "";
    let n=0;
    let numeroString = numeroArabe.toString();

    if (numeroArabe <= 4000 && numeroArabe >= 1000) {
        tipo = "miles";
    } else if (numeroArabe < 1000 && numeroArabe >= 100) {
        tipo = "centenas";
    } else if (numeroArabe < 100 && numeroArabe >= 10) {
        tipo = "centenas";
    } else {
        tipo = "unidades";
    }

    switch (tipo) {
        case "miles":
            console.log(numeroString[n]);
            
            n++;

        case "centenas":
            console.log(numeroString[n]);
            
            n++;

        case "decenas":
            console.log(numeroString[n]);
            
            n++;
        case "unidades":
            console.log(numeroString[n]);
            break;

        default:

    }
}



console.log(pasarNumArabesARomanos(3500));
console.log(pasarNumArabesARomanos(900));
console.log(pasarNumArabesARomanos(68));
console.log(pasarNumArabesARomanos(5));