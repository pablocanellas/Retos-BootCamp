import{Mobile}from "./claseMovil2";
export class Catalogo{

    public catalogo:Mobile[];
    constructor(){
        this.catalogo=new Array();
    }
    public getinfo(){
        for(let i=0;i<this.catalogo.length;i++){
            console.log(this.catalogo[i].gettodaInfo());
        }

    }


}