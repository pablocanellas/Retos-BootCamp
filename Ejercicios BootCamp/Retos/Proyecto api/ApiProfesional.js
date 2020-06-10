class profesional {
    constructor(name, age, genre, weight, height, hairColor, eyesColor, race, isRetired, nationality, oscarsNumber, profession) {
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
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var Profesional = { name: "", edad: 0, genre: "", weight: 0, height: 0, hairColor: "", eyesColor: "", race: "", isRetired: "", oscarsNumber: 0, nationality: "", profession: "" };




app.get("/Profesional", function(request, response) {

    response.send(Profesional);
});
app.post("/Profesional",
    function(request, response) {

        Profesional.name = request.body.name;
        Profesional.edad = request.body.edad;
        Profesional.genre = request.body.genre;
        Profesional.weight = request.body.weight;
        Profesional.height = request.body.height;
        Profesional.hairColor = request.body.hairColor;
        Profesional.eyesColor = request.body.eyesColor;
        Profesional.race = request.body.race;
        Profesional.isRetired = request.body.isRetired;
        Profesional.oscarsNumber = request.body.oscarsNumber;
        Profesional.nationality = request.body.nationality;
        Profesional.profession = request.body.profession;
        let respuesta = { error: true, codigo: 200, mensaje: "Profesional creado", resulado: Profesional };
        response.send(respuesta);

    });
app.put("/Profesional",
    function(request, response) {

        Profesional.name = request.body.name;
        Profesional.edad = request.body.edad;
        Profesional.genre = request.body.genre;
        Profesional.weight = request.body.weight;
        Profesional.height = request.body.height;
        Profesional.hairColor = request.body.hairColor;
        Profesional.eyesColor = request.body.eyesColor;
        Profesional.race = request.body.race;
        Profesional.isRetired = request.body.isRetired;
        Profesional.oscarsNumber = request.body.oscarsNumber;
        Profesional.nationality = request.body.nationality;
        Profesional.profession = request.body.profession;
        let respuesta = { error: true, codigo: 200, mensaje: "Profesional Actualizado", resulado: Profesional };
        response.send(respuesta);

    });
app.delete("/Profesional",
    function(request, response) {

        Profesional.name = "";
        Profesional.edad = 0;
        Profesional.genre = "";
        Profesional.weight = 0;
        Profesional.height = 0;
        Profesional.hairColor = "";
        Profesional.eyesColor = "";
        Profesional.race = "";
        Profesional.isRetired = "";
        Profesional.oscarsNumber = "";
        Profesional.nationality = "";
        Profesional.profession = "";
        let respuesta = { error: true, codigo: 200, mensaje: "Profesional Eliminado", resulado: Profesional };
        response.send(respuesta);
    })
app.use(function(req, res, next) {
    respuesta = { error: true, codigo404, mensahe: 'URL no Encontrada' };
    res.status(404).send(respuesta);
});
app.listen(3005);