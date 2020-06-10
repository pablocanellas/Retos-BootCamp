"use strict";
exports.__esModule = true;
exports.profesional = void 0;
var profesional = /** @class */ (function () {
    function profesional(name, age, genre, weight, height, hairColor, eyesColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyesColor = eyesColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    profesional.prototype.toPrint = function () {
        console.log("Nombre: " + this.name + "\n" + "Edad: " + this.age + "\n" + "Genero: " + this.genre + "\n" + "Peso: " + this.weight + "\n" + "Altura: "
            + this.height + "\n" + "Color de Pelo: " + this.hairColor + "\n" + "Color de Ojos: " + this.eyesColor + "\n" + "Carrera: " + this.race + "\n" + "Retirado: " + this.isRetired + "\n" + "Nacionalidad: " + this.nationality + "\n" + "Nº Oscars: " + this.oscarsNumber + "\n" + "Porfesion: " + this.profession + "\n");
    };
    return profesional;
}());
exports.profesional = profesional;
