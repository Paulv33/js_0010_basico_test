export function mayorDeTresNumeros(a, b, c) {
    return Math.max(a, b, c);

  
}
export function ceroIfNull(a) {
    return a === null ? 0 : a;
 
}

export function numerosParesCount(desde, hasta) {
    if (desde > hasta) return 0; // Si desde es mayor que hasta, devolvemos 0.

    let count = 0;
    for (let i = desde; i <= hasta; i++) {
        if (i % 2 === 0) {
            count++; // Incrementa el contador si el número es par.
        }
    }
    return count;
}


export function ifCadenaMasLargaDeN(cadena, n) {
    return cadena.length > n;
 

}
export function trueIfSumaDeTresNumerosIgualN(a, b, c, n) {
 return (a+b+c) === n;

}
// que devuelva en centimos redondeado
// el producto de cantidad por precio
export function importe(cantidad, precio) {
    return Math.round(cantidad * precio * 100);
}


