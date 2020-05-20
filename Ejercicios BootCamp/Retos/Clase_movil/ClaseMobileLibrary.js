"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCaculation();
    }
    MobileLibrary.prototype.getname = function () {
        return this.name;
    };
    MobileLibrary.prototype.getlocalion = function () {
        return this.location;
    };
    MobileLibrary.prototype.getmobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.gettotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.settotalPrice = function (newtotalPrice) {
        this.totalPrice = newtotalPrice;
    };
    MobileLibrary.prototype.setname = function (newName) {
        this.name = newName;
    };
    MobileLibrary.prototype.setlocation = function (newLocation) {
        this.location = newLocation;
    };
    MobileLibrary.prototype.setmobiles = function (newMobiles) {
        this.mobiles = newMobiles;
    };
    MobileLibrary.prototype.totalPriceCaculation = function () {
        for (var i = 0; i < this.mobiles.length; i++) {
            this.totalPrice += this.mobiles[i].getprice();
        }
        return this.totalPrice;
    };
    MobileLibrary.prototype.getinfo = function () {
        for (var i = 0; i < this.mobiles.length; i++) {
            console.log("this is all my mobiles:" + "\n" + this.mobiles[i].gettodaInfo() + this.mobiles + "\n Price overall:" + this.totalPriceCaculation());
        }
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
/* function precio(array:) {
         
    
    let precio_total:number=this.gettotalPrice();
   for(let a=0;a<array.getmobiles().length;a++){
       precio_total+=array[a].getmobiles().getprice();

   }
   return precio_total;}*/ 
