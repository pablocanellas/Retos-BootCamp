import{Mobile}from "./claseMovil2";
let movil1:Mobile=new Mobile("Nokia","3210","z",3,"blanco","no",1,100);
let movil2:Mobile=new Mobile("Iphone","3G","x",4,"negro","si",3,1000);
let movil3:Mobile=new Mobile("Samsung ","Galaxy 10","y",5,"oro","no",2,400);
let tienda= new Array();
tienda=[movil3,movil2,movil1];
for(let i=0;i<tienda.length;i++){
   console.log(tienda[i].gettodaInfo());
    
}

console.log(movil1.gettodaInfo());
console.log(movil2.gettodaInfo());
console.log(movil3.gettodaInfo());
 movil1.setcamaraNumber(4);
 movil1.setis5G("si");
 console.log(movil1.gettodaInfo(),movil2.gettodaInfo(),movil3.gettodaInfo());