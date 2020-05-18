import {Person} from "./clase_PERSON";

import{Calendar}from "./calendar";

let persona1:Person = new Person("Pepe",30,"teruel");

let persona2:Person=new Person("Marta",28,"Madrid");

let persona3:Person=new Person("Carlos",5,"Barcelona");

let calendar1:Calendar=new Calendar();

calendar1.people=[persona1,persona2,persona3];

console.log(calendar1.getprintCalendar());