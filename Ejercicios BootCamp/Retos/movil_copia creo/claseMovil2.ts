export class Mobile{
  private name:string;
    private model:string;
    private trademark:string;
    private sdSize: number;
    private color: string;
    private is5G:string;
    private camaraNumber:number;
    private price :number;
    constructor(name:string,model:string,trademark:string,sdSize:number,color:string,is5G:string,camaraNumber:number,price:number){
        this.name=name;
        this.model=model;
        this.trademark=trademark;
        this.sdSize=sdSize;
        this.color=color;
        this.is5G=is5G;
        this.camaraNumber=camaraNumber;
        this.price=price;
    }
    public getname():string{
        return this.name;
    }
    public getmodel():string{
        return this,this.model;
    }
    public gettrademark():string{
        return this.trademark;
    }
    public getsdSize():number{
        return this.sdSize;
    }
    public getcolor():string{
        return this.color;
    }
    public getis5G():string{
        return this.is5G;
    }
    public getcamaraNumber():number{
        return this.camaraNumber;
    }
    public getprice():number{
        return this.price
    }
    public setname(newName:string){
        this.name=newName;
    }
    public setmodel(newModel:string){
        this.model=newModel;
    }
    public setTrademark(newTrademark:string){
        this.trademark=newTrademark;
    }
    public setsdSize(newsdSize:number){
        this.sdSize=newsdSize;
    }
    public setcolor(newcolor:string){
        this.color=newcolor;
    }
    public setis5G(newis5G:string){
        this.is5G=newis5G;
    }
    public setcamaraNumber(newcamaraNumber:number){
        this.camaraNumber=newcamaraNumber;
    }
    public setprice(newprice:number){
        this.price=newprice;
 
    }
    public gettodaInfo(){
        return"the characteristics of de mobile name are:"+"\n -Name:"+this.getname()+"\n\t -Model:"+this.getmodel()+"\n\t -Trademark"+this.gettrademark()+"\n\t -SD Size:"+this.getsdSize()+"\n\t -Color:"+this.getcolor()+"\n\t -Is 5G?:"+this.getis5G+"\n\t -Number of Camaras:"+this.getcamaraNumber()+"\n\t -Price:"+this.getprice()+"\n";
    }

}