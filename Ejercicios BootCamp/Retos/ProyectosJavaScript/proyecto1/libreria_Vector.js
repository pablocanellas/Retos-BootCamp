class vector {
    constructor(Array_Numeros, tamano) {
        this.Array_Numeros = Array_Numeros;
        this.tamano = tamano;
    }
}

function crear_Vector(n, m) {

    var vector = new Array(n);
    for (vari = 0; i < vector.length; i++) {

        vector[i] = (Math.random() * m);

    }
    return vector;
}

function suma_Vector(vector, vector2) {

    if (vector.length == vector2.length) {
        var resultado_suma = new Array(vector.length);
        for (var a = 0; a < vector.length; a++) {
            resultado_suma[a] = vector[a] + vector2[a];
        }



        return resultado_suma;
    }

}

function resta_Vector(vector, vector2) {
    if (vector.length == vector2.length) {
        var resultado_resta = new Array(vector.length);
        for (var a = 0; a < vector.length; a++) {
            resultado_resta[a] = vector[a] - vector2[a];
        }


        return resultado_resta;
    }

}

function producto_Vector(vector, vector2) {
    if (vector.length == vector2.length) {
        var resultado_Producto = new Array(vector.length);
        for (var a = 0; a < vector.length; a++) {
            resultado_Producto[a] = vector[a] * vector2[a];
        }



        return resultado_Producto;
    }


}

function vector_multi(vector, n) {
    var resultado_multi = new Array(vector.length);
    for (var a = 0; a < vector.length; a++) {
        resultado_multi[a] = vector[a] * n;
    }

    return resultado_multi;
}



module.exports = { crear_Vector, suma_Vector, resta_Vector, producto_Vector, vector_multi };