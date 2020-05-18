function evenOdd(numero) {
    if (numero % 2 === 0) {

        return "par"
    } else {

        return "impar"
    }

}
var numero = prompt('Escribe un numero');
evenOdd(numero);