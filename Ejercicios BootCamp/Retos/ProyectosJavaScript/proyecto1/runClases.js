var myLibClases = require("./Calase_Personas");
var myLibAgendas = require("./Clase_Agendas");
var Persona1 = new myLibClases.Persona(80, 190, "Negro", 1992, ["futbol", "baloncesto", "gamer"]);
var Persona2 = new myLibClases.Persona(70, 182, "rubio", 1991, ["comer", "correr", "amigos"])
var Persona3 = new myLibClases.Persona(92, 178, "castaño", 1994, ["pintar", "jugar", "Leer"]);
var Agenda1 = new myLibAgendas.Agenda([Persona1, Persona2, Persona3]);
Agenda1.getPrintPersonas();