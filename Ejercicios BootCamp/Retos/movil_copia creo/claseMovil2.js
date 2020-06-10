"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, camaraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.camaraNumber = camaraNumber;
        this.price = price;
    }
    Mobile.prototype.getname = function () {
        return this.name;
    };
    Mobile.prototype.getmodel = function () {
        return this, this.model;
    };
    Mobile.prototype.gettrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getsdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getcolor = function () {
        return this.color;
    };
    Mobile.prototype.getis5G = function () {
        return this.is5G;
    };
    Mobile.prototype.getcamaraNumber = function () {
        return this.camaraNumber;
    };
    Mobile.prototype.getprice = function () {
        return this.price;
    };
    Mobile.prototype.setname = function (newName) {
        this.name = newName;
    };
    Mobile.prototype.setmodel = function (newModel) {
        this.model = newModel;
    };
    Mobile.prototype.setTrademark = function (newTrademark) {
        this.trademark = newTrademark;
    };
    Mobile.prototype.setsdSize = function (newsdSize) {
        this.sdSize = newsdSize;
    };
    Mobile.prototype.setcolor = function (newcolor) {
        this.color = newcolor;
    };
    Mobile.prototype.setis5G = function (newis5G) {
        this.is5G = newis5G;
    };
    Mobile.prototype.setcamaraNumber = function (newcamaraNumber) {
        this.camaraNumber = newcamaraNumber;
    };
    Mobile.prototype.setprice = function (newprice) {
        this.price = newprice;
    };
    Mobile.prototype.gettodaInfo = function () {
        return "the characteristics of de mobile name are:" + "\n -Name:" + this.getname() + "\n\t -Model:" + this.getmodel() + "\n\t -Trademark" + this.gettrademark() + "\n\t -SD Size:" + this.getsdSize() + "\n\t -Color:" + this.getcolor() + "\n\t -Is 5G?:" + this.getis5G + "\n\t -Number of Camaras:" + this.getcamaraNumber() + "\n\t -Price:" + this.getprice() + "\n";
    };
    return Mobile;
}());
exports.Mobile = Mobile;
