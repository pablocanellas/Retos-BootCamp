import {movie}from "./clase_Movie";
export class Imdb{
    public peliculas:movie[];
    constructor(peliculas:movie[]){
        this.peliculas=peliculas;
    }
    public toprintf(){
        for(let i=0;i<this.peliculas.length;i++){
          this.peliculas[i].toprint();
        }
    }
    public escribirEnFicheroJSON(nombreFichero:string){
        const f= require('fs');
      
       const Datos=new Imdb(this.peliculas);
        f.writeFileSync(nombreFichero+".json",JSON.stringify(Datos));
        
            
        
    }


}
