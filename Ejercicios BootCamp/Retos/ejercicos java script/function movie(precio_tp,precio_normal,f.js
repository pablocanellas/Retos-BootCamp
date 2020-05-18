function movie(precio_tp, precio_normal, fraccion) {
    var precio_tpa = precio_tp;
    var precio_a = precio_normal;
    var iteracion = 0;
    while (precio_tpa > precio_normal * iteracion) {
        iteracion++;
        precio_a = precio_a * fraccion;
        precio_tpa += precio_a;
    }
    return iteracion;
}
movie(500, 15, 0.9);