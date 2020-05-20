function delreves(cambiar) {
    var tamano = cambiar.length;
    var letra = new Array(tamano);
    for (var i = 0; i < tamano; i++) {
        letra[i] = cambiar[tamano - i - 1];
    }
    return letra;
}
