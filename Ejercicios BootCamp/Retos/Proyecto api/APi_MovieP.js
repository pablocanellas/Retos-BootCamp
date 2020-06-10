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
    constructor(id, title, releaseYear, nationality, genre) {
        this.id = id;
        this.title = title;
        this.releaseyear = releaseYear;
        this.actors = Array();
        this.nacionality = nationality;
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



const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/pelicula/actor/:id", function(request, response) {
    let id = request.params.id;
    for (let i = 0; i < movie_kill1.actors.length; i++) {
        if (movie_kill1.actors[i].id == id) {
            response.send(movie_kill1.actors[i]);
        }
    }
});
app.get("/pelicula/director", function(request, response) {
    response.send(movie_kill1.director);
});
app.get("/pelicula/guionista", function(request, response) {
    response.send(movie_kill1.writer);
});
app.post("/pelicula/actor", function(request, response) {
    let actorNuevo = new profesional(movie_kill1.actors.length, request.body.actors.name, request.body.actors.edad, request.body.actors.genre, request.body.actors.weight, request.body.actors.height, request.body.actors.hairColor,
        request.body.actors.eyesColor, request.body.actors.race, request.body.actors.isRetired, request.body.actors.nationality, request.body.actors.oscarsNumber, request.body.actors.profession);
    movie_kill1.actors.push(actorNuevo);
    let respuesta = { error: true, codigo: 200, mensaje: "actor creado", resulado: actorNuevo };
    response.send(respuesta);
});
app.post("/pelicula/director", function(request, response) {
    let directorNuevo = new profesional(movie_kill1.director.length, request.body.director.name, request.body.director.edad, request.body.director.genre, request.body.director.weight, request.body.director.height, request.body.director.hairColor,
        request.body.director.eyesColor, request.body.director.race, request.body.director.isRetired, request.body.director.nationality, request.body.director.oscarsNumber, request.body.director.profession);
    movie_kill1.actors.push(directorNuevo);
    let respuesta = { error: true, codigo: 200, mensaje: "director creado", resulado: directorNuevo };
    response.send(respuesta);
});
app.post("/pelicula/guionista", function(request, response) {
    let escritorNuevo = new profesional(movie_kill1.writer.length, request.body.actors.name, request.body.actors.edad, request.body.actors.genre, request.body.actors.weight, request.body.actors.height, request.body.actors.hairColor,
        request.body.actors.eyesColor, request.body.actors.race, request.body.actors.isRetired, request.body.actors.nationality, request.body.actors.oscarsNumber, request.body.actors.profession);
    movie_kill1.actors.push(escritorNuevo);
    let respuesta = { error: true, codigo: 200, mensaje: "guionista creado", resulado: directorNuevo };
    response.send(respuesta);
});
app.put("/pelicula/actor", function(request, response) {
    let id = request.body.actors.id;
    for (let i = 0; i < movie_kill1.actors.length; i++) {
        if (movie_kill1.actors[i].id == id) {
            movie_kill1.actors[i].name = request.body.actors.name;
            movie_kill1.actors[i].edad = request.body.actors.edad;
            movie_kill1.actors[i].genre = request.body.actors.genre;
            movie_kill1.actors[i].weight = request.body.actors.weight;
            movie_kill1.actors[i].height = request.body.actors.height;
            movie_kill1.actors[i].hairColor = request.body.actors.hairColor;
            movie_kill1.actors[i].eyesColor = request.body.actors.eyesColor;
            movie_kill1.actors[i].race = request.body.actors.race;
            movie_kill1.actors[i].isRetired = request.body.actors.isRetired;
            movie_kill1.actors[i].oscarsNumber = request.body.actors.oscarsNumber;
            moviekill1.actors[i].nationality = request.body.actors.nationality;
            moviekill1.actors[i].profession = request.body.actors.profession;
            let respuesta = { error: true, codigo: 200, mensaje: "Actor Actualizado", resulado: movie_kill1.actors[i] };
            response.send(respuesta);
        }
    }
});
app.put("/pelicula/director", function(request, response) {
    movie_kill1.director.name = request.body.director.name;
    movie_kill1.director.edad = request.body.director.edad;
    movie_kill1.director.genre = request.body.director.genre;
    movie_kill1.director.weight = request.body.director.weight;
    movie_kill1.director.height = request.body.director.height;
    movie_kill1.director.hairColor = request.body.director.hairColor;
    movie_kill1.director.eyesColor = request.body.director.eyesColor;
    movie_kill1.director.race = request.body.director.race;
    movie_kill1.director.isRetired = request.body.director.isRetired;
    movie_kill1.director.oscarsNumber = request.body.director.oscarsNumber;
    movie_kill1.director.nationality = request.body.director.nationality;
    movie_kill1.director.profession = request.body.director.profession;
    let respuesta = { error: true, codigo: 200, mensaje: "director Actualizado", resulado: movie_kill1.director };
    response.send(respuesta);



});
app.put("/pelicula/guionista", function(request, response) {
    movie_kill1.writer.name = request.body.writer.name;
    movie_kill1.writer.edad = request.body.writer.edad;
    movie_kill1.writer.genre = request.body.writer.genre;
    movie_kill1.writer.weight = request.body.writer.weight;
    movie_kill1.writer.height = request.body.writer.height;
    movie_kill1.writer.hairColor = request.body.writer.hairColor;
    movie_kill1.writer.eyesColor = request.body.writer.eyesColor;
    movie_kill1.writer.race = request.body.writer.race;
    movie_kill1.writer.isRetired = request.body.writer.isRetired;
    movie_kill1.writer.oscarsNumber = request.body.writer.oscarsNumber;
    movie_kill1.writer.nacionality = request.body.writer.nacionality;
    movie_kill1.writer.profession = request.body.writer.profession;
    let respuesta = { error: true, codigo: 200, mensaje: "Guionista Actualizado", resulado: movie_kill1.writer };
    response.send(respuesta);



});
app.delete("pelicula/actor", function(request, response) {
    let id = request.body.actors.id;
    for (let i = 0; i < movie_kill1.actors.length; i++) {
        if (movie_kill1.actors[i].id == id) {
            movie_kill1.actors[i].name = "";
            movie_kill1.actors[i].edad = 0;
            movie_kill1.actors[i].genre = "";
            movie_kill1.actors[i].weight = 0;
            movie_kill1.actors[i].height = 0;
            movie_kill1.actors[i].hairColor = "";
            movie_kill1.actors[i].eyesColor = "";
            movie_kill1.actors[i].race = "";
            movie_kill1.actors[i].isRetired = "";
            movie_kill1.actors[i].oscarsNumber = 0;
            moviekill1.actors[i].nationality = "";
            moviekill1.actors[i].profession = "";
            let respuesta = { error: true, codigo: 200, mensaje: "Actor Eliminado", resulado: movie_kill1.actors[i] };
            response.send(respuesta);
        }
    }

});
app.delete("pelicula/director", function(request, response) {
    movie_kill1.director.name = "";
    movie_kill1.director.edad = 0;
    movie_kill1.director.genre = "";
    movie_kill1.director.weight = 0;
    movie_kill1.director.height = 0;
    movie_kill1.director.hairColor = "";
    movie_kill1.director.eyesColor = "";
    movie_kill1.director.race = "";
    movie_kill1.director.isRetired = "";
    movie_kill1.director.oscarsNumber = 0;
    movie_kill1.director.nationality = "";
    movie_kill1.director.profession = "";
    let respuesta = { error: true, codigo: 200, mensaje: "director Eliminado", resulado: movie_kill1.director };
    response.send(respuesta);


});
app.delete("pelicula/guionista", function(request, response) {
    movie_kill1.writer.name = "";
    movie_kill.writer.edad = 0;
    movie_kill1.writer.genre = "";
    movie_kill1.writer.weight = 0;
    movie_kill1.writer.height = 0;
    movie_kill1.writer.hairColor = "";
    movie_kill1.writer.eyesColor = "";
    movie_kill1.writer.race = "";
    movie_kill1.writer.isRetired = "";
    movie_kill1.writer.oscarsNumber = 0;
    movie_kill1.writer.nationality = "";
    movie_kill1.writer.profession = "";
    let respuesta = { error: true, codigo: 200, mensaje: "director Eliminado", resulado: movie_kill1.writer };
    response.send(respuesta);


});
app.listen(3007)