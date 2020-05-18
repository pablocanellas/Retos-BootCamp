function Suma_array(array) {
    var resultado = 0;
    var tamano = array.length;

    for (var i = 0; i < tamano; i++) {
        resultado += Math.pow(array[i], 2);
    }
    return resultado;
}
Suma_array([1, 2, 2]);