"use strict";
exports.__esModule = true;
exports.Catalogo = void 0;
var Catalogo = /** @class */ (function () {
    function Catalogo() {
        this.catalogo = new Array();
    }
    Catalogo.prototype.getinfo = function () {
        for (var i = 0; i < this.catalogo.length; i++) {
            console.log(this.catalogo[i].gettodaInfo());
        }
    };
    return Catalogo;
}());
exports.Catalogo = Catalogo;
