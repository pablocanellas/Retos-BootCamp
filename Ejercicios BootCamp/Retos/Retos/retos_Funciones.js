function Calculadora(operador, Numero1, Numero2) {
    var resultado = 0;
    switch (operador) {
        case "sum":
            resultado = Numero1 + Numero2;
            break;
        case "subs":
            resultado = Numero1 - Numero2;
            break;
        case "div":
            resultado = Numero1 / Numero2;
            break;
        case "mult":
            resultado = Numero1 * Numero2;
            break;

    }

    return resultado;


}