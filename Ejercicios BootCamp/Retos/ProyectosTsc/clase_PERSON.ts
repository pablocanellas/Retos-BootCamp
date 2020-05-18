 export class Person{
    public name:string;
    public age: number;
    private adress: string;
    constructor(name:string,age:number,adress:string){
        this.name=name;
        this.age=age;
        this.adress=adress;
    }
    public getadress():string{

        return this.adress;
    }
    public setadress(adress:string){

        this.adress=adress;
    }
    public getPrintName():string{

        return this.name;
        

    }
    public getyearOfBirth(anioActual:number):number{

        return((anioActual)-(this.age));
    }
    public gettodaInfo(){
        return this.name+this.age+this.getadress;
    }
}