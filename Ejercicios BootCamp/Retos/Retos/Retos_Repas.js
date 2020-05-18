//Reto 1 repaso variables


var texto = " <b> lorem ipsum dolor sit amet</b>,consectetur adipiscing elit.<br>Phasellus mattis vehicula consequat.<i>proin dapibus nunc<br>quam,nec dictum erat fegugiat vitae</i>" + "<br>" + "<br>";

var texto2 = "<strike>Curabitur dignissim nisi a est vulpatate tristique</strike>.Curabitur" + "<br>" + "maximus erat leo,sit amet facilisis est egestas sed." + "<br>" + "</br>";

var texto3 = "<b>Morbi aliquam,ipsum eget volutpat blandit,lectus odio" + "<br>" + "condimentum dui, eget dictum quam ipsum sit amet</b>" + "<br>" + "<b>nulla</b>." + "<br>" + "<br>";

var Texto_Total = (texto + texto2 + texto3);
document.write(Texto_Total);



//Reto 2 repaso de condicionales

var producto_neto = 1800;
var comprar = "España";
var producto_bruto = producto_neto;

if (producto_neto >= 2000) {

    producto_bruto += producto_neto * 0.16;

} else {

    producto_bruto += producto_neto * 0.10;
}
if (comprar != "España") {

    producto_bruto += producto_neto * 0.10;

}
console.log(producto_bruto);


//reto 3  repaso bucles


var Resultado_suma = 0;
var i = 1;

for (i = 1; i <= 100; i++) {

    Resultado_suma += Math.pow(i, 2);
}
console.log(Resultado_suma);


// reto 4 repaso  general

var array_libros = ["Ready player one", "El nombre del vineto", "El temor de un hombre sabio", "cien años de soledad", "origen"];
var a;
var numero_letras = 0;
var e;
var mas_largo = 0;
var Almacenar = "";
for (a = 0; a < array_libros.length; a++) {

    for (e = 0; e < array_libros[a].length; e++) {
        if (array_libros[a][e] != ' ') {
            ++numero_letras;
        }


    }
    array_libros[a] = array_libros[a].concat(" [", numero_letras, "]");

    if (numero_letras > mas_largo) {

        mas_largo = numero_letras;

        Almacenar = array_libros[a];


    }


    numero_letras = 0;



}
document.write("<ul>");

for (var h = 0; h < array_libros.length; h++) {


    if (Almacenar == array_libros[h]) {
        document.write("<li><b>" + Almacenar + "</b></li>");
    } else {

        document.write("<li>" + array_libros[h] + "</li>");
    }
}
document.write("</ul>");


// reto 5   repaso  general

var Vector = new Array(10);
var Vector2 = new Array(10);
var vector_Suma = new Array(10);
var vector_multi = new Array(10);
var vector_Producto = new Array(10);


var k = 0;


for (k = 0; k < Vector.length; k++) {
    Vector[k] = new Array(10);
    Vector2[k] = new Array(10);
    vector_Suma[k] = new Array(10);
    vector_multi[k] = new Array(10);
    vector_Producto[k] = new Array(10);

    for (var j = 0; j < Vector[k].length; j++) {

        Vector[k][j] = (Math.random() * 50);
        Vector2[k][j] = (Math.random() * 50);
        vector_Suma[k][j] = Vector[k][j] + Vector2[k][j];


    }


}
vector_multi = (Math.random() * 1000) * vector_Suma;

console.log(vector_Suma);
console.log(vector_multi);


for (var z = 0; z < Vector.length; z++) {


    for (var x = 0; x < Vector[z].length; x++) {

        vector_Producto[z][x] = 0;

        for (var t = 0; t < Vector2[x].length; t++) {

            vector_Producto[z][x] += Vector[z][t] * Vector2[t][x];

        }



    }


}
console.log(vector_Producto);