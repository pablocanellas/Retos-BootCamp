"use strict";
exports.__esModule = true;
exports.Triangulo = exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.getx = function () {
        return this.x;
    };
    Punto.prototype.gety = function () {
        return this.y;
    };
    Punto.prototype.setx = function (newx) {
        this.x = newx;
    };
    Punto.prototype.sety = function (newy) {
        this.y = newy;
    };
    Punto.prototype.getstring = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    Punto.prototype.distanciaAlOrigen = function () {
        return Math.sqrt(this.x * this.x - this.y * this.y);
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var x1 = this.x - otroPunto.getx();
        var y1 = this.y - otroPunto.gety();
        return Math.sqrt(x1 * x1 + y1 * y1);
    };
    Punto.prototype.calcularCuadrante = function () {
        var resultado = 0;
        if (this.x > 0.0 && this.y > 0.0) {
            resultado = 1;
        }
        else if (this.x < 0.0 && this.y > 0.0) {
            resultado = 2;
        }
        else if (this.x < 0.0 && this.y < 0.0) {
            resultado = 3;
        }
        else if (this.x > 0.0 && this.y < 0.0) {
            resultado = 4;
        }
        else { //(x==0.0 || y==0.0)
            resultado = 0;
        }
        return resultado;
    };
    Punto.prototype.calcularMasCercano = function (otrosPuntos) {
        var puntoMasCercano = null;
        if (otrosPuntos != null && otrosPuntos.length > 0) {
            var distaciaMinima = this.calcularDistancia(otrosPuntos[0]);
            for (var i = 0; i < otrosPuntos.length; i++) {
                var distancia = this.calcularDistancia(otrosPuntos[i]);
                if (distancia < distaciaMinima) {
                    distancia = distaciaMinima;
                    puntoMasCercano = otrosPuntos[i];
                }
            }
        }
        return puntoMasCercano;
    };
    return Punto;
}());
exports.Punto = Punto;
var Triangulo = /** @class */ (function () {
    function Triangulo(vertice1, vertice2, vertice3) {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }
    Triangulo.prototype.getVertice1 = function () {
        return this.vertice1;
    };
    Triangulo.prototype.getVertice2 = function () {
        return this.vertice2;
    };
    Triangulo.prototype.getVertice3 = function () {
        return this.vertice3;
    };
    Triangulo.prototype.setVertice1 = function (newVertice1) {
        this.vertice1 = newVertice1;
    };
    Triangulo.prototype.setVertice2 = function (newVertice2) {
        this.vertice2 = newVertice2;
    };
    Triangulo.prototype.setVertice3 = function (newVertice3) {
        this.vertice3 = newVertice3;
    };
    Triangulo.prototype.calcularLongitudLados = function () {
        var longitudLados = Array();
        longitudLados[0] = this.vertice1.calcularDistancia(this.vertice2);
        longitudLados[1] = this.vertice1.calcularDistancia(this.vertice3);
        longitudLados[2] = this.vertice3.calcularDistancia(this.vertice1);
        return longitudLados;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
