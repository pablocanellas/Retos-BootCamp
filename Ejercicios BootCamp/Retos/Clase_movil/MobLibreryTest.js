"use strict";
exports.__esModule = true;
var claseMovil2_1 = require("./claseMovil2");
var ClaseMobileLibrary_1 = require("./ClaseMobileLibrary");
var movil1 = new claseMovil2_1.Mobile("Nokia", "3210", "z", 3, "blanco", "no", 1, 100);
var movil2 = new claseMovil2_1.Mobile("Iphone", "3G", "x", 4, "negro", "si", 3, 1000);
var movil3 = new claseMovil2_1.Mobile("Samsung ", "Galaxy 10", "y", 5, "oro", "no", 2, 400);
var movil4 = new claseMovil2_1.Mobile("xiaomi", "Bomb 10", "m", 10, "Plata", "si", 3, 1200);
var librery1 = new Array();
librery1 = [movil1, movil2, movil3, movil4];
var LibreryTotal = new ClaseMobileLibrary_1.MobileLibrary("NuevaTemporada", "Marzo", librery1);
;
console.log(LibreryTotal.getlocalion());
console.log(LibreryTotal.getmobiles);
console.log(LibreryTotal.getinfo());
