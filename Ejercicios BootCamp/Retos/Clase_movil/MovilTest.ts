import{Mobile}from "./claseMovil";
let movil1:Mobile=new Mobile("Nokia","3210","z",3,"blanco","no",1,100);
let movil2:Mobile=new Mobile("Iphone","3G","x",4,"negro","si",3,1000);
let movil3:Mobile=new Mobile("Samsung ","Galaxy 10","y",5,"oro","no",2,400);
console.log(movil1.name,movil1.model,movil1.trademark,movil1.sdSize,movil1.color,movil1.is5G,movil1.camaraNumber,movil1.price);
console.log(movil2.name,movil2.model,movil2.trademark,movil2.sdSize,movil2.color,movil2.is5G,movil2.camaraNumber,movil2.price);
console.log(movil3.name,movil3.model,movil3.trademark,movil3.sdSize,movil3.color,movil3.is5G,movil3.camaraNumber,movil3.price);
movil1.is5G="si";
movil1.camaraNumber=4;
console.log(movil1);
console.log(movil2);
console.log(movil3);