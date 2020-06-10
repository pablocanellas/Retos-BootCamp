//Reto1
/*
function a() {
    console.log("hola desde a");
}

function b() {

    console.log("hola desde b");
}

function main(funcion) {
    console.log("hola main");
    funcion();
}
main(a);
main(b);
main(main);

*/
//Reto2
function cuadrado(x) {
    return (x * x);
}
console.log(cuadrado(5));

function aleatorio(y) {
    return Math.round(Math.random() * y);
}
console.log(aleatorio(49));

function compose(a, b) {
    return function(x) {

        return a(b(x));
    }


}
console.log(compose(cuadrado, aleatorio)(4));