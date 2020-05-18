"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, adress) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    Person.prototype.getadress = function () {
        return this.adress;
    };
    Person.prototype.setadress = function (adress) {
        this.adress = adress;
    };
    Person.prototype.getPrintName = function () {
        return this.name;
    };
    Person.prototype.getyearOfBirth = function (anioActual) {
        return ((anioActual) - (this.age));
    };
    Person.prototype.gettodaInfo = function () {
        return this.name + this.age + this.getadress;
    };
    return Person;
}());
exports.Person = Person;
