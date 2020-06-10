"use strict";
exports.__esModule = true;
exports.movie = void 0;
var movie = /** @class */ (function () {
    function movie(title, releaseYear, nationality, genre) {
        /*this.title=title;
        this.releaseyear=releaseYear;
        this.actors= Array();
        this.nacionality=nationality;
        this.director= null;//para objetos  inicializar simepre null
        this.writer=null;
        this.language="";
        this.plataform="";
        this.isMCU="";
        this.mainCharacterName="";
        this.producer="";
        this.distributor="";
        this.genre=genre;*/
    }
    movie.prototype.toprint = function () {
        console.log("titulo: " + this.title + "\n Año de lanzamiento: " + this.releaseyear + "\n Actores: ");
        for (var i = 0; i < this.actors.length; i++) {
            this.actors[i].toPrint();
        }
        this.actors;
        console.log("\n nacionalidad: " + this.nacionality + "\n director" + this.director.toPrint() + "\n writer: " + this.writer.toPrint() + "\n Idioma: " + this.language + "\n Plataforma: " + this.plataform + "\n MCU: " + this.isMCU + "\n Personaje Principal: " + this.mainCharacterName + "\n Productor:" + this.producer + "\n Distribuidor: " + this.distributor + "\n");
    };
    return movie;
}());
exports.movie = movie;
