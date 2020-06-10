"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.toprintf = function () {
        for (var i = 0; i < this.peliculas.length; i++) {
            this.peliculas[i].toprint();
        }
    };
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var f = require('fs');
        var Datos = new Imdb(this.peliculas);
        f.writeFileSync(nombreFichero + ".json", JSON.stringify(Datos));
    };
    return Imdb;
}());
exports.Imdb = Imdb;
