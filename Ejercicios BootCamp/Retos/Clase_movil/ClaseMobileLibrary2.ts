import{Mobile}from "./claseMovil2";
 export class MobileLibrary{
    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;
    constructor(name:string,location:string,mobiles:Mobile[],totalPriceCalation:number){
        this.name=name;
        this.location=location;
        this.mobiles= mobiles;
        this.totalPrice=totalPriceCalation;
    }
    public getname():string{
        return this.name;
    } 
    public getlocalion():string{
        return this.location;
    }
    public getmobiles():Mobile[]{
        return this.mobiles;
    }
    public gettotalPrice():number{
        return this.totalPrice;
    }
    public settotalPrice(newtotalPrice:number){
        this.totalPrice=newtotalPrice;
    }
    public setname(newName:string){
        this.name=newName;
    }
    public setlocation(newLocation:string){
        this.location=newLocation;
    }
    public setmobiles(newMobiles:Mobile[]){
        this.mobiles=newMobiles;
    }
     private gettotalPriceCaculation():number {
        for(let i=0;i<this.mobiles.length;i++){
            this.totalPrice+=this.mobiles[i].getprice();
        }
        return this.totalPrice;
        
    }
    public getinfo(){
        for(let i=0;i<this.mobiles.length;i++){
            console.log("this is all my mobiles:"+"\n"+this.mobiles[i].gettodaInfo()+this.mobiles+"\n"+this.gettotalPriceCaculation());
        }
    }
}