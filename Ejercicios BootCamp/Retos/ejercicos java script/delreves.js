function delreves(cambiar) {

    var letra = "";

    var tamano = cambiar.length;

    for (var i = 0; i < tamano; i++) {
        letra += cambiar[tamano - i - 1];



    }
    return letra;
}
var pedir = prompt("escriba una palabra a corregir");

delreves(pedir);