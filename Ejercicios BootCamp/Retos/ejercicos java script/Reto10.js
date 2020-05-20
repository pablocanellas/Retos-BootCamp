function EvenOdd(numero) {
    if (numero % 2 == 0) {
        console.log("Es par");
    }
    else {
        console.log("Es Impar");
    }
}
function SumaCar(Array) {
    var Resultado = 0;
    for (var i = 0; i < Array.length; i++) {
        for (var a = 0; a < Array[i].length; a++) {
            ++Resultado;
        }
    }
    return Resultado;
}
var numero1 = SumaCar(["Casa", "Coche", "Ciudad", "Cesta"]);
var numero2 = SumaCar(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]);
var numero3 = SumaCar(["Venezuela", "Veneno", "Voltaje"]);
EvenOdd(numero1);
EvenOdd(numero2);
EvenOdd(numero3);
