"use strict";
exports.__esModule = true;
var claseMovil2_1 = require("./claseMovil2");
var movil1 = new claseMovil2_1.Mobile("Nokia", "3210", "z", 3, "blanco", "no", 1, 100);
var movil2 = new claseMovil2_1.Mobile("Iphone", "3G", "x", 4, "negro", "si", 3, 1000);
var movil3 = new claseMovil2_1.Mobile("Samsung ", "Galaxy 10", "y", 5, "oro", "no", 2, 400);
var tienda = new Array();
tienda = [movil3, movil2, movil1];
for (var i = 0; i < tienda.length; i++) {
    console.log(tienda[i].gettodaInfo());
}
console.log(movil1.gettodaInfo());
console.log(movil2.gettodaInfo());
console.log(movil3.gettodaInfo());
movil1.setcamaraNumber(4);
movil1.setis5G("si");
console.log(movil1.gettodaInfo(), movil2.gettodaInfo(), movil3.gettodaInfo());
