 delreves_arrow = (cambiar) => {

     let letra = "";

     let tamano = cambiar.length;

     for (let i = 0; i < tamano; i++) {
         letra += cambiar[tamano - i - 1];



     }
     return letra;
 }
 let pedir = prompt("escriba una palabra a corregir");

 delreves(pedir);