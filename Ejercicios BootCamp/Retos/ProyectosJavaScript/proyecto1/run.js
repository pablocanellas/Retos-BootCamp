/*var myLib = require("./index");

myLib.suma(3, 5);
myLib.resta(5, 3);
myLib.division(6, 3);
myLib.multiplicar(6, 3);

console.log(myLib.suma(3, 5), myLib.resta(5, 3), myLib.division(6, 3), myLib.multiplicar(6, 3));
*/
var myLibV = require("./libreria_Vector");

console.log(myLibV.suma_Vector([1, 2, 3], [3, 2, 1]));
console.log(myLibV.resta_Vector([1, 2, 3], [3, 2, 1]));
console.log(myLibV.producto_Vector([1, 2, 3], [3, 2, 1]));
console.log(myLibV.vector_multi([1, 2, 3], 3));