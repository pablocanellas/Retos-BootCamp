import{Punto}from"./clasePunto";
import{Triangulo}from"./clasePunto";
let punto1:Punto=new Punto(4,5);
let punto2:Punto=new Punto(6,4);
let punto3:Punto=new Punto(5,6);
let Triangulo1:Triangulo=new Triangulo(punto1,punto2,punto3);
console.log(punto1.getstring());
console.log(punto1.calcularCuadrante());
console.log(punto1.calcularDistancia(punto2));
console.log(punto1.calcularMasCercano([punto2,punto3]));
console.log(Triangulo1.calcularLongitudLados());