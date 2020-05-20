import{Mobile}from "./claseMovil2";
import{MobileLibrary}from "./ClaseMobileLibrary";
let movil1:Mobile=new Mobile("Nokia","3210","z",3,"blanco","no",1,100);
let movil2:Mobile=new Mobile("Iphone","3G","x",4,"negro","si",3,1000);
let movil3:Mobile=new Mobile("Samsung ","Galaxy 10","y",5,"oro","no",2,400);
let movil4:Mobile=new Mobile("xiaomi","Bomb 10","m",10,"Plata","si",3,1200)
let librery1=new Array();
librery1=[movil1,movil2,movil3,movil4];
let LibreryTotal:MobileLibrary= new MobileLibrary("NuevaTemporada","Marzo",librery1);
;
console.log(LibreryTotal.getlocalion());
console.log(LibreryTotal.getmobiles);
console.log(LibreryTotal.getinfo());
