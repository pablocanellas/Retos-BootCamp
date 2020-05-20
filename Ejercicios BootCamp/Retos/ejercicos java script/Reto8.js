function SumaCar(Array) {
    var Resultado = 0;
    for (var i = 0; i < Array.length; i++) {
        for (var a = 0; a < Array[i].length; a++) {
            ++Resultado;
        }
    }
    return Resultado;
}
