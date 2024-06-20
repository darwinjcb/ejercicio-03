'use strict';
let miArreglo = [0, 2, 4, 8];

function contarElementos(array) {
    let resultados = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            resultados.push(array[i] + "" + array[j]);
        }
    }
    return resultados;
}

let resultadoFinal = contarElementos(miArreglo);
for (let i = 0; i < resultadoFinal.length; i++) {
    alert(resultadoFinal[i]);
}
