import{Mobile}from "./claseMovil2";
 export class MobileLibrary{
    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;
    constructor(name:string,location:string,mobiles:Mobile[]){
        this.name=name;
        this.location=location;
        this.mobiles= mobiles;
        this.totalPrice=this.totalPriceCaculation();
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
    private totalPriceCaculation():number {
        for(let i=0;i<this.mobiles.length;i++){
            this.totalPrice+=this.mobiles[i].getprice();
        }
        return this.totalPrice;
        
    }
    public getinfo(){
        for(let i=0;i<this.mobiles.length;i++){
            console.log("this is all my mobiles:"+"\n"+this.mobiles[i].gettodaInfo()+this.mobiles+"\n Price overall:"+this.totalPriceCaculation());
        }
    }
}

/* function precio(array:) {
         
    
    let precio_total:number=this.gettotalPrice();
   for(let a=0;a<array.getmobiles().length;a++){
       precio_total+=array[a].getmobiles().getprice();

   }
   return precio_total;}*/