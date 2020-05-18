"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = new Array(n);
        for (var i = 0; i < n; i++) {
            this.elements[i] = Math.random() * k;
        }
    }
    Vector.prototype.getelements = function () {
        return this.elements;
    };
    Vector.prototype.setElemts = function (a, c) {
        this.elements[a] = c;
    };
    Vector.prototype.getElement = function (a) {
        return this.elements[a];
    };
    Vector.prototype.getPrint = function () {
        for (var x = 0; x < this.elements.length; ++x) {
            console.log(this.elements[x]);
        }
    };
    Vector.prototype.getAdd = function (v1) {
        var sumaVector = new Vector(this.elements.length, 0);
        for (var a = 0; a < this.elements.length; a++) {
            sumaVector.setElemts(a, v1.getElement(a) + this.elements[a]);
        }
        return sumaVector;
    };
    Vector.prototype.getSubs = function (v1) {
        var restaVector = new Vector(this.elements.length, 0);
        for (var a = 0; a < this.elements.length; a++) {
            restaVector.setElemts(a, this.elements[a] - v1.getElement(a));
        }
        return restaVector;
    };
    Vector.prototype.getmult = function (v1) {
        var multVector = new Vector(this.elements.length, 0);
        for (var a = 0; a < this.elements.length; a++) {
            multVector.setElemts(a, v1.getElement(a) * this.elements[a]);
        }
        return multVector;
    };
    Vector.prototype.getMultNumber = function (n) {
        var multNumber = new Vector(this.elements.length, 0);
        for (var a = 0; a < this.elements.length; a++) {
            multNumber.setElemts(a, n * this.elements[a]);
        }
        return multNumber;
    };
    return Vector;
}());
exports.Vector = Vector;
