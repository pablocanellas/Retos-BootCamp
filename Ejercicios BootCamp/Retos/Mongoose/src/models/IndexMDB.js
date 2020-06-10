let mongoose = require("mongoose");
let UserId = require("./UserMDB");
let Profile = require("./ProfileMDB");
let Creedentials = require("./CreedentialsMDB");

mongoose.connect('mongodb://localhost:27017/codenotch', { useNewUrlParser: true, useUnifiedTopology: true });

let userId1 = new UserId({
    login: "PabloSanchez",
    password: "12345678"
});
//userId1.save(checkRespuesta);

let profile1 = new Profile({
    name: "Pablo",
    surname: "Sanchez",
    yearOfBirth: 1992,
    comments: "hOLA",
    role: "Animador"
});
profile1.save(checkRespuesta);

let creedentials1 = new Creedentials({
        address: "Calle de la falacia",
        phone: 34765898901,
        email: "pablo@gmail.com"

    })
    //creedentials1.save(checkRespuesta);


function checkRespuesta(err, res) {
    if (err) {
        console.log("Error: " + err);
    } else {
        console.log("Modelo guardado correctamente");
        mongoose.disconnect();
    }
};