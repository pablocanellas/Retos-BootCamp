"use strict";
exports.__esModule = true;
exports.Calendar = void 0;
var Calendar = /** @class */ (function () {
    function Calendar() {
        this.people = new Array;
    }
    Calendar.prototype.getprintCalendar = function () {
        for (var i = 0; i < this.people.length; i++) {
            console.log(this.people[i].gettodaInfo());
        }
    };
    return Calendar;
}());
exports.Calendar = Calendar;
var texto;
texto = "";
