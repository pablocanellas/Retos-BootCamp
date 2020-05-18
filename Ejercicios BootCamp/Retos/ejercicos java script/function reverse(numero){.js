function reverse(numero) {

    var alreves = 0;
    var resto_actual = 0;
    var resto_anterior = 0;
    var contador = 0;
    var n = 1;

    for (var i = 10; numero != numero % i; i = i * 10) {

        ++contador;
    }



    for (var a = 0; a <= contador; ++a) {
        n = n * 10;
        resto_actual = numero % n;
        alreves += ((resto_actual - resto_anterior) / (n / 10)) * (Math.pow(10, contador - a));
        resto_anterior = resto_actual;

    }

    return alreves;
}

reverse(17891);