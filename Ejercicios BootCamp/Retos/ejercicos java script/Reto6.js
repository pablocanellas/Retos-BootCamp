function Par(Array) {
    var Resultado = false;
    for (var i = 0; i < Array.length; i++) {
        if (Array[i] % 2 == 0) {
            Resultado = true;
        }
    }
    return Resultado;
}
