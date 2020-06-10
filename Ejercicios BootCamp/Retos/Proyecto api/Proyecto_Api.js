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
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var Profesional5 = new Profesional(0, "Uma Karuna", 50, "femenino", 55, 183, "rubio", "azul", "exmodelo", "no", "Americana", "no", "actor");
var Profesional1 = new Profesional(1, "Dicaprio", 45, "masculino", 70, 180, "castaño", "azul", "economista", "NO", "Americana", 1, "actor");
var Profesional2 = new Profesional(2, "Quentin", 60, "masculino", 80, 170, "calvo", "marron", "Director", "NO", "Americana", 1, "director");
var Profesional3 = new Profesional(3, "Lara", 50, "femenino", 55, 183, "rubio", "azul", "exmodelo", "no", "Americana", "no", "actor");
var Profesional4 = new Profesional(4, "Pablo", 45, "masculino", 70, 180, "castaño", "azul", "economista", "NO", "Americana", 1, "actor");

var conjunto1 = [Profesional5, Profesional1, Profesional2, Profesional3, Profesional4];



app.get("/Profesionales/:id", function(request, response) {
    let id = request.params.id;
    for (let i = 0; i < conjunto1.length; i++) {
        if (conjunto1[i].id == id) {
            response.send(conjunto1[i])
        }

    }

})
app.get("/Profesionales", function(request, response) {

    response.send(conjunto1);
});


app.post("/Profesionales/",
    function(request, response) {
        let ProfesionalNuevo = new Profesional(conjunto1.length, request.body.name, request.body.edad, request.body.genre, request.body.weight, request.body.height, request.body.hairColor,
            request.body.eyesColor, request.race, request.body.isRetired, request.body.nationality, request.body.oscarsNumber, request.body.profession);
        conjunto1.push(ProfesionalNuevo);
        let respuesta = { error: true, codigo: 200, mensaje: "Profesional creado", resulado: ProfesionalNuevo };
        response.send(respuesta);

    });
app.put("/Profesionales/",
    function(request, response) {
        let id = request.body.id;
        for (let i = 0; i < conjunto1.length; i++) {
            if (conjunto1[i].id === id) {

                conjuntol[i].name = request.body.name;
                conjuntol[i].edad = request.body.edad;
                conjuntol[i].genre = request.body.genre;
                conjuntol[i].weight = request.body.weight;
                conjuntol[i].height = request.body.height;
                conjuntol[i].hairColor = request.body.hairColor;
                conjuntol[i].eyesColor = request.body.eyesColor;
                conjuntol[i].race = request.body.race;
                conjuntol[i].isRetired = request.body.isRetired;
                conjuntol[i].oscarsNumber = request.body.oscarsNumber;
                conjuntol[i].nationality = request.body.nationality;
                conjuntol[i].profession = request.body.profession;
                let respuesta = { error: true, codigo: 200, mensaje: "Profesional Actualizado", resulado: conjunto1[i] };
                response.send(respuesta);

            }
        }




    });
app.delete("/Profesionales",
    function(request, response) {
        let id = request.body.id;

        for (let i = 0; i < conjunto1.length; i++) {
            if (conjunto1[i].id === id) {

                conjunto1.splice(conjunto1[i]);

                let respuesta = { error: true, codigo: 200, mensaje: "Profesional Eliminado", resulado: conjunto1[i] };
                response.send(respuesta);
            }


        }

    })

app.listen(3004);