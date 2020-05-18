//Reto 1 Condicionales 

var color = "verde";

var resultado = "";

if (color == "verde") {

    resultado = "el peaton puede cruzar ";

} else if (color != "verde") {

    resultado = " el peaton es no puede cruzar ";
}
// reto  2   Condicionales

var Barcelona = 20;
var Madrid = 50;
var At_Madrid = 40;
var Valencia = 30;
var Zaragoza = 25;
var Espayol = 23;
var Sevilla = 21;
var Betis = 22;
switch (Barcelona) {
    case 50:
        console.log("ha ganado la liga");


    case 40:
        console.log("te as clasificado para la champions")
        break;

    case 30:

    case 25:
        console.log("Te as clasificado para la Uefa ");
        break;
    case 23:

    case 22:
        console.log("Permanencia en liga");
        break;
    case 21:

    case 20:
        console.log("Desciendes de la liga ");
        break;

    default:
        break;


}


//reto 3 
var platos = 0;

var DJ = 0;

var barra_libre = 0;

var coctel = 0;

if ((platos == 3 && barra_libre == 2 && DJ == 1) || (platos == 2 && barra_libre == 1 && coctel == 1)) {

    console.log(" EL evento se celebrara");
} else {

    console.log(" el evento no se celebrar ");
}

// reto 4

var JSON_persona = {
    "nombre": "Pepe",
    "apellido": "del Teso",
    "anyoNacimiento": 1960,
    "aficiones": ["leer", "escribir", "nadar"],
    "DNI": {
        "anyoExpedicion": 2000,
        "lugardenacimiento": "Madrid"
    },
    "colorPelo": "negro"

}
var JSON_persona1 = {
    "nombre": "Marta",
    "Apellido": "sanchez",
    "anyoNacimiento": 1965,
    "aficiones": ["leer", "padel", "tenis"],
    "DNI": {
        "anyoExpedicion": 2002,
        "lugardenacimiento": "Toledo"
    },
    "colorPelo": "castaño",

}
var JSON_persona2 = {
    "nombre": "Carlos",
    "Apellido": "del Toro",
    "anyoNacimiento": 1992,
    "aficiones": ["futbol", "baloncesto", "amigos"],
    "DNI": {
        "anyoExpedicion": 2005,
        "lugardenacimineto": "Barcelona"
    },
    "colorPelo": "castaño",
}
var JSON_persona3 = {
    "nombre": "Gonzalo",
    "Apellidos": "Montoro",
    "anyoNacimiento": 2003,
    "aficiones": ["gamer", "comer", "amigos"],
    "DNI": {
        "anyoExpedicion": 2007,
        "lugardenacimiento": "Valencia"
    },
    "colorPelo": "rubio",
}
var array_Personas = [JSON_persona, JSON_persona1, JSON_persona2, JSON_persona3];
for (var i = 0; i < 4; ++i) {
    if (array_Personas[i].colorPelo === "castaño") {

        document.write(array_Personas[i].nombre);

    }
    if (array_Personas[i].anyoNacimiento < 1990) {

        console.log(2020 - array_Personas[i].anyoNacimiento);

    }
    if ((array_Personas[i].colorPelo === "negro" && array_Personas[i].DNI.anyoExpedicion < 2003) ||
        (array_Personas[i].anyoNacimiento >= 2003 && (array_Personas[i].aficiones[1] === "comer" || array_Personas[i].aficiones[1] === "dormir"))) {

        console.log(array_Personas[i].DNI.lugardenacimiento);
    }
}