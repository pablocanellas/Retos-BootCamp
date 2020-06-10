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
movie_kill1.writer = Profesional3;
movie_kill1.distributor = "Miramax";
movie_kill1.isMCU = "NO";
movie_kill1.mainCharacterName = Profesional5;
movie_kill1.language = "Ingles";
movie_kill1.producer = "A Band Apart";
movie_kill1.plataform = "Netflix";
movie_kill1.descripcion = "n Kill Bill: Volumen 1, una mujer embarazada, identificada como la Novia, es masacrada y tiroteada en la cabeza, en el ensayo de su boda en una pequeña iglesia al sur de Texas, por sus antiguos camaradas del Escuadrón Asesino Víbora Letal, un grupo de asesinos profesionales que trabajan para el mejor postor, venganza, guerra de bandas de traficantes de drogas y asesinatos políticos. Por la venganza de su exnovio Bill, que fue abandonado por la Novia y trataba de alejarse de la banda, para iniciar una nueva vida alejada de la violencia.Después de caer en un profundo coma durante cuatro años, al despertar, se entera de que ya no tiene a su bebé nonato, escapa del hospital y comienza una inmediata venganza contra todos los asesinos que participaron en la masacre de la iglesia."
var movie_kill2 = new movie(1, " kill Bill Vol.2", 2004, "Americana", "Tarantino");
movie_kill2 = [profesional_Uma, profesinal_Dicaprio]
movie_kill2.director = profesional_Quentin;
movie_kill2.writer = profesional_Quentin;
movie_kill2.distributor = "Miramax";
movie_kill2.isMCU = "NO";
movie_kill2.mainCharacterName = profesional_Uma;
movie_kill2.language = "Ingles";
movie_kill2.producer = "A Band Apart";
movie_kill2.plataform = "Netflix";
conjunto2 = [movie_kill1, movie_kill2];



const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/peliculas/:id", function(request, response) {
    let id = request.params.id;
    for (let i = 0; i < conjunto2.length; i++) {
        if (conjunto2[i].id == id) {
            response.send(conjunto2[i])
        }
    }
});
app.get("/peliculas", function(request, response) {
    response.send(conjunto2)
});

app.post("/Peliculas", function(request, response) {
    let NuevaPelicula = new Movie(conjunto2.length, request.body.title, request.body.releaseYear, request.body.nacionality, request.body.genre)
    NuevaPelicula.actors = request.body.actors;
    NuevaPelicula.director = request.body.director;
    NuevaPelicula.writer = request.body.writer;
    NuevaPelicula.distributor = request.body.distributor;
    NuevaPelicula.isMCU = request.body.isMCU;
    NuevaPelicula.mainCharacterName = request.body.mainCharacterName;
    NuevaPelicula.language = request.body.language;
    NuevaPelicula.producer = request.body.producer;
    NuevaPelicula.plataform = request.body.plataform;
    conjunto2.push(NuevaPelicula);
    let respuesta = { error: true, codigo: 200, mensaje: "Pelicula creado", resulado: NuevaPelicula };
    response.send(respuesta);

});
app.put("/peliculas", function(request, response) {
    let id = request.body.id;
    for (let i = 0; i < conjunto2.length; i++) {
        if (conjunto2[i] == id) {
            conjunto2[i].title = request.body.title;
            conjunto2[i].releaseyear = request.body.releaseYear;
            conjunto2[i].nacionality = request.body.nacionality;
            conjunto2[i].genre = request.body.genre;
            conjunto2[i].actors = request.body.actors;
            conjunto2[i].director = request.body.director;
            conjunto2[i].writer = request.body.writer;
            conjunto2[i].distributor = request.body.distributor;
            conjunto2[i].isMCU = request.body.isMCU;
            conjunto2[i].mainCharacterName = request.body.mainCharacterName;
            conjunto2[i].language = request.body.language;
            conjunto2[i].producer = request.body.producer;
            conjunto2[i].plataform = request.body.plataform;
            let respuesta = { error: true, codigo: 200, mensaje: "Pelicula Actualizado", resulado: conjunto2[i] };
            response.send(respuesta);

        }

    }
});
app.delete("/peliculas", function(request, response) {
    let id = request.body.id
    for (let i = 0; i < conjunto2.length; i++) {
        if (conjunto2[i] == id) {
            conjunto2.splice(conjunto2[i])
            let respuesta = { error: true, codigo: 200, mensaje: "Pelicula eliminada", resulado: conjunto2[i] };
            response.send(respuesta);

        }

    }

});
app.listen(3008)