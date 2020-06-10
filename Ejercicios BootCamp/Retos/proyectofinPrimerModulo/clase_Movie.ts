import {profesional}from "./Clase_Profesional";
 export class movie{
    public title:string;
    public genre:string;
    public releaseyear:number;
    public actors:profesional[];
    public nacionality:string;
    public director:profesional;
    public writer:profesional;
    public language:string;
    public plataform:string;
    public isMCU:string;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    constructor(title:string,releaseYear:number,nationality:string,genre:string){
        /*this.title=title;
        this.releaseyear=releaseYear;
        this.actors= Array();
        this.nacionality=nationality;
        this.director= null;//para objetos  inicializar simepre null
        this.writer=null;
        this.language="";
        this.plataform="";
        this.isMCU="";
        this.mainCharacterName="";
        this.producer="";
        this.distributor="";
        this.genre=genre;*/

    }
    
    public toprint(){
       
      console.log("titulo: "+this.title+"\n Año de lanzamiento: "+this.releaseyear+"\n Actores: ")
      for(let i= 0;i<this.actors.length;i++){
          this.actors[i].toPrint();
      }
      this.actors
      console.log("\n nacionalidad: "+this.nacionality+"\n director"+this.director.toPrint()+"\n writer: "+this.writer.toPrint()+"\n Idioma: "+ this.language+"\n Plataforma: "+this.plataform+"\n MCU: "+this.isMCU+"\n Personaje Principal: "+this.mainCharacterName+"\n Productor:"+this.producer+"\n Distribuidor: "+this.distributor+"\n");
    }


}