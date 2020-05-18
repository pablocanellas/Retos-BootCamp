class Vector {
    constructor(Array_Numeros, tamano) {
        this.Array_Numeros = Array_Numeros;
        this.tamano = tamano;
    }
}

function crear_Vector(n, m) {

    var Numeros = new Array(n);

    var vector = new Vector(Numeros, n);

    for (var i = 0; i < n; i++) {

        vector.Array_Numeros[i] = (Math.random() * m);

    }
    return vector;
}

function suma_Vector(vector, vector2) {

    if (vector.length == vector2.length) {
        var resultado_suma = new Vector([], vector.length);
        for (var a = 0; a < vector.length; a++) {
            resultado_suma.Array_Numeros[a] = vector[a] + vector2.[a];
        }



        return resultado_suma.Array_Numeros;
    }

}

function resta_Vector(vector, vector2) {
    if (vector.length == vector2.length) {
        var resultado_resta = new Vector([], vector.length);
        for (var a = 0; a < vector.length; a++) {
            resultado_resta.Array_Numeros[a] = vector[a] - vector2[a];
        }


        return resultado_resta.Array_Numeros;
    }

}

function producto_Vector(vector, vector2) {
    if (vector.length == vector2.length) {
        var resultado_Producto = new Vector([], vector.length);
        for (var a = 0; a < vector.length; a++) {
            resultado_Producto.Array_Numeros[a] = vector[a] * vector2[a];
        }



        return resultado_Producto.Array_Numeros;
    }


}

function vector_multi(vector, n) {
    var Numeros = new Array(vector.length)
    var resultado_multi = new Vector(Numeros, vector.length);
    for (var a = 0; a < vector.length; a++) {
        resultado_multi.Array_Numeros[a] = vector[a] * n;
    }

    return resultado_multi.Array_Numeros;
}
var vector1 = crear_Vector(10, 3);

//console.log(vector1);
var multi =
    console.log(vector_multi(vector1.Array_Numeros, 3));