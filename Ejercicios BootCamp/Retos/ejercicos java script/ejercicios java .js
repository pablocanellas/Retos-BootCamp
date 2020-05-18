function contador(array) {

    var suma = [];

    var positivo = 0;

    var negativo = 0;

    var tamano = array.length;

    for (var i = 0; i < tamano; ++i) {

        if (array[i] > 0) {
            positivo++;
        } else if (array[i] < 0) {
            negativo += array[i];
        }
    }
    if (positivo === 0 && negativo === 0) {
        return suma;
    } else {
        suma[0] = positivo;
        suma[1] = negativo;
        return suma;
    }
}
var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
contador(lista);