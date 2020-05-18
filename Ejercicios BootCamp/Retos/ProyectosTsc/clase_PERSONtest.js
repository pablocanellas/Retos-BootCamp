"use strict";
exports.__esModule = true;
var clase_PERSON_1 = require("./clase_PERSON");
var Persona1 = new clase_PERSON_1.Person("Pepe", 30, "teruel");
console.log(Persona1.getPrintName());
console.log(Persona1.getyearOfBirth(2020));
Persona1.setadress("sevilla");
console.log(Persona1.getadress());