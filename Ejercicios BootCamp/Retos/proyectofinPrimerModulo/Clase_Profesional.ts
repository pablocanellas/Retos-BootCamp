export class profesional{
    public name:string;
    public age: number;
    public genre:string;
    public weight:number;
    public height:Number;
    public hairColor:string;
    public eyesColor:string;
    public race:string;
    public isRetired:string;
    public nationality:string;
    public oscarsNumber:number;
    public profession:string;
    constructor(name:string,age:number,genre:string,weight:number,height:number,hairColor:string ,eyesColor:string,race:string,isRetired:string,nationality:string,oscarsNumber:number,profession:string){
        this.name=name;
        this.age=age;
        this.genre=genre;
        this.weight=weight;
        this.height=height;
        this.hairColor=hairColor;
        this.eyesColor=eyesColor;
        this.race=race;
        this.isRetired=isRetired;
        this.nationality=nationality;
        this.oscarsNumber=oscarsNumber;
        this.profession=profession;
    
    }
    public toPrint(){
        console.log("Nombre: "+this.name+"\n"+"Edad: "+this.age+"\n"+"Genero: "+this.genre+"\n"+"Peso: "+this.weight+"\n"+"Altura: "
        +this.height+"\n"+"Color de Pelo: "+this.hairColor+"\n"+"Color de Ojos: "+this.eyesColor+"\n"+"Carrera: "+this.race+"\n"+"Retirado: "+this.isRetired+"\n"+"Nacionalidad: "+this.nationality+"\n"+"Nº Oscars: "+this.oscarsNumber+"\n"+"Porfesion: "+this.profession+"\n");

    }


}