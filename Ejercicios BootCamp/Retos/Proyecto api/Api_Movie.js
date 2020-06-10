class Profesional {
    constructor(id, name, age, genre, weight, height, hairColor, eyesColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.id = id;
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
}



class Movie {
    constructor(id, title, releaseYear, nacionality, genre) {
        this.id = id;
        this.title = title;
        this.releaseyear = releaseYear;
        this.actors = Array();
        this.nacionality = nacionality;
        this.director = null; //para objetos  inicializar simepre null
        this.writer = null;
        this.language = "";
        this.plataform = "";
        this.isMCU = "";
        this.mainCharacterName = null;
        this.producer = "";
        this.distributor = "";
        this.genre = genre;
        this.descripcion = "";
    }
}
var Profesional5 = new Profesional(0, "Uma Karuna", 50, "femenino", 55, 183, "rubio", "azul", "exmodelo", "no", "Americana", "no", "actor");
var Profesional1 = new Profesional(1, "Dicaprio", 45, "masculino", 70, 180, "castaño", "azul", "economista", "NO", "Americana", 1, "actor");
var Profesional2 = new Profesional(2, "Quentin", 60, "masculino", 80, 170, "calvo", "marron", "Director", "NO", "Americana", 1, "director");
var Profesional3 = new Profesional(3, "Lara", 50, "femenino", 55, 183, "rubio", "azul", "exmodelo", "no", "Americana", "no", "actor");
var Profesional4 = new Profesional(4, "Pablo", 45, "masculino", 70, 180, "castaño", "azul", "economista", "NO", "Americana", 1, "actor");
var movie_kill1 = new Movie(0, "Kill Bill Vol.1", 2003, "Americana", "Tarantino");
movie_kill1.actors = [Profesional5, Profesional1];
movie_kill1.director = Profesional2;
movie_kill1.writer = Profesional5;
movie_kill1.distributor = "Miramax";
movie_kill1.isMCU = "NO";
movie_kill1.mainCharacterName = Profesional5;
movie_kill1.language = "Ingles";
movie_kill1.producer = "A Band Apart";
movie_kill1.plataform = "Netflix";
movie_kill1.descripcion = "n Kill Bill: Volumen 1, una mujer embarazada, identificada como la Novia, es masacrada y tiroteada en la cabeza, en el ensayo de su boda en una pequeña iglesia al sur de Texas, por sus antiguos camaradas del Escuadrón Asesino Víbora Letal, un grupo de asesinos profesionales que trabajan para el mejor postor, venganza, guerra de bandas de traficantes de drogas y asesinatos políticos. Por la venganza de su exnovio Bill, que fue abandonado por la Novia y trataba de alejarse de la banda, para iniciar una nueva vida alejada de la violencia.Después de caer en un profundo coma durante cuatro años, al despertar, se entera de que ya no tiene a su bebé nonato, escapa del hospital y comienza una inmediata venganza contra todos los asesinos que participaron en la masacre de la iglesia."
var movie_kill2 = new Movie(1, " kill Bill Vol.2", 2004, "Americana", "Tarantino");
movie_kill2 = [Profesional3, Profesional4]
movie_kill2.director = Profesional2;
movie_kill2.writer = Profesional2;
movie_kill2.distributor = "Miramax";
movie_kill2.isMCU = "NO";
movie_kill2.mainCharacterName = Profesional5;
movie_kill2.language = "Ingles";
movie_kill2.producer = "A Band Apart";
movie_kill2.plataform = "Netflix";
var movie = { id: 0, title: "", releaseYear: 0, nacionality: "", genre: "" }
movie.distributor = "";
movie.isMCU = "";
movie.language = "";
movie.producer = "";
movie.plataform = "";
movie.descripcion = "";


const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/pelicula", function(request, response) {
    response.send(movie);
});
app.post("/pelicula", function(request, response) {
    movie.title = request.body.title;
    movie.releaseYear = request.body.releaseYear;
    movie.nacionality = request.body.nacionality;
    movie.genre = request.body.genre;
    movie.distributor = request.body.distributor;
    movie.isMCU = request.body.isMCU;
    movie.language = request.body.language;
    movie.producer = request.body.producer;
    movie.plataform = request.body.plataform;
    movie.descripcion = request.body.plataform;
    let respuesta = { error: true, codigo: 200, mensaje: "Pelicula Creada", resulado: movie };
    response.send(respuesta);
});
app.put("/pelicula", function(request, response) {
    movie.title = request.body.title;
    movie.releaseYear = request.body.releaseYear;
    movie.nacionality = request.body.nacionality;
    movie.genre = request.body.genre;
    movie.distributor = request.body.distributor;
    movie.isMCU = request.body.isMCU;
    movie.language = request.body.language;
    movie.producer = request.body.producer;
    movie.plataform = request.body.plataform;
    movie.descripcion = request.body.plataform;
    let respuesta = { error: true, codigo: 200, mensaje: "Pelicula Actualizada", resulado: movie };
    response.send(respuesta);


})
app.delete("/pelicula", function(request, response) {
    movie.title = "";
    movie.releaseYear = 0;
    movie.nacionality = "";
    movie.genre = "";
    movie.distributor = "";
    movie.isMCU = "",
        movie.language = "";
    movie.producer = "";
    movie.plataform = "",
        movie.descripcion = "";
    let respuesta = { error: true, codigo: 200, mensaje: "Pelicula Eliminada", resulado: movie };
    response.send(respuesta);

});
app.listen(3006);