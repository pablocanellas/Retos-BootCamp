import {Person} from"./clase_PERSON";
let Persona1:Person = new Person("Pepe",30,"teruel");
console.log(Persona1.getPrintName());
console.log(Persona1.getyearOfBirth(2020));
Persona1.setadress("sevilla");
console.log(Persona1.getadress()); 