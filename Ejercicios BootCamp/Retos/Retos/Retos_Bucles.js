//Reto1 

var i;

//bucle con for


for (i = 1; i <= 10; i++) {


    console.log(i);

}



//bucle  con While

i = 1;
while (i <= 10) {
    console.log(i);

    i++;
}


//Bucle con do/while
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);


//reto2
for (var e = 1; e <= 10; i++) {
    if (e % 2 != 0) {
        console.log(e);
    }
}

//reto3

for (var h = 1; h <= 10; h++) {

    if (h % 2 != 0 && h % 3 == 0) {

        console.log(h);
    }
}


//reto 4

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

var i;

for (i = 0; i < array_Personas.length; i++) {

    console.log(array_Personas[i]);

}

i = 0;

while (i < array_Personas.length) {


    console.log(array_Personas[i]);


    i++;
}

for (i = 0; i < array_Personas.length; i++) {

    if ((array_Personas[i].anyoNacimiento) >= 1978 && (array_Personas[i].anyoNacimiento <= 2000)) {

        console.log(array_Personas[i]);

    }
}

i = 0;
while (i < array_Personas.length) {
    if ((array_Personas[i].anyoNacimiento) >= 1978 && (array_Personas[i].anyoNacimiento <= 2000)) {

        console.log(array_Personas[i]);

        i++;

    }
}

i = 0;
for (i = 0; i < array_Personas.length; i++) {

    if ((array_Personas[i].anyoNacimiento) >= 1978 && (array_Personas[i].anyoNacimiento <= 2000)) {

        console.log("tu edad esta entre los 20 y 40 años");

    } else if (array_personas[i].anyoNacimiento < 1978) {

        console.log("eres de la tercera edad ");
    } else {

        console.log("tu hedad es menor que 20");
    }

}

for (i = 0; i < array_Personas.length; i++) {

    array_Personas[i].aficiones.push("jugar a la play");
    console.log(array_Personas[i].aficiones);

}

//Reto5
//
var numero = 5;
var i;
var resultado3 = 1;

for (i = 1; i <= numero; i++) {
    resultado3 = i * resultado3;

}
console.log(resultado3);
i = 1;
while (i <= numero) {
    resultado3 = i * resultado3;
    i++
}
console.log(resultado3);

//
var array_Numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var resultado = "";

var tamano = array_Numeros2.length;

var i = 0;

while (i < tamano) {
    if (array_Numeros2[i] % 2 == 0) {


        resultado += array_Numeros2[i] + " ,";


    }
    i++;

}



console.log(resultado);
//

var array_nombres = ["Pepe", "Carlos", "Maria", "juancarlos"];

var a = 0;

while (array_nombres[a] != "Pepe" && a < array_nombres) {
    ++a;
}
if (a >= array_nombres.length) {

    console.log("no existe pepe");
} else {

    console.log(a);

}








//
var suma = 0;
var i = 1;
while (i <= 100) {

    suma += i;

    i++;

}
console.log(suma);


//

var Vector = new Array(100);
var Vector2 = new Array(100);
var vector_Suma = new Array(100);


var k = 0;


for (k = 0; k < Vector.length; k++) {

    Vector[k] = (Math.random() * 20);
    Vector2[k] = (Math.random() * 20);
    vector_Suma[k] = Vector[k] + Vector2[k];


}
console.log(vector_Suma);