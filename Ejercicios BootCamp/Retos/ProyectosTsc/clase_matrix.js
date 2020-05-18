"use strict";
exports.__esModule = true;
exports.Matrix = void 0;
var clase_vector_1 = require("./clase_vector");
var Matrix = /** @class */ (function () {
    function Matrix(n, m, k) {
        this.elements = new Array(n);
        for (var i = 0; i < n; i++) {
            this.elements[i] = new clase_vector_1.Vector(m, k);
        }
    }
    Matrix.prototype.getelements = function () {
        return this.elements;
    };
    Matrix.prototype.getelement = function (a) {
        return this.elements[a];
    };
    Matrix.prototype.setelements = function (newElementes) {
        this.elements = newElementes;
    };
    Matrix.prototype.setelement = function (newElement, n) {
        this.elements[n] = newElement;
    };
    Matrix.prototype.getprint = function () {
        for (var a = 0; a < this.elements.length; a++) {
            console.log(this.getelement(a).getPrint() + "\n");
        }
    };
    Matrix.prototype.getadd = function (m1) {
        var sumaMatrix = new Matrix(m1.getelements().length, m1.getelement(0).getElement.length, 0);
        for (var v = 0; v < m1.getelements().length; v++) {
            sumaMatrix.setelement(this.elements[v].getAdd(m1.getelement(v)), v);
        }
        return sumaMatrix;
    };
    Matrix.prototype.getmultnumber = function (n) {
        var Multnumber = new Matrix(this.elements.length, this.elements[0].getElement.length, 0);
        for (var i = 0; i < this.elements.length; i++) {
            Multnumber.setelement(this.elements[i].getMultNumber(n), i);
        }
        return Multnumber;
    };
    Matrix.prototype.getMultespecial = function (n) {
        var multespecial = new Matrix(this.elements.length, this.elements[0].getElement.length, 0);
        for (var c = 0; c < this.elements.length; c++) {
            for (var s = 0; s < this.elements[c].getelements().length; s++) {
                if (this.elements[c].getElement(s) % 2 == 0) {
                    multespecial.elements[c].setElemts(s, n * (this.elements[c].getElement(s)));
                }
                else {
                    multespecial.elements[c].setElemts(s, (n - 1) * (this.elements[c].getElement(s)));
                }
            }
        }
        return multespecial;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
