function conversion_binarios(array) {
    var resultado = 0;
    var tamano = array.length;

    for (var i = 0; i < tamano; i++) {
        if (array[i] === 1) {
            resultado += Math.pow(2, tamano - i - 1);

        }
    }
    return resultado;
}
conversion_binarios([1, 0, 0, 1, 1]);