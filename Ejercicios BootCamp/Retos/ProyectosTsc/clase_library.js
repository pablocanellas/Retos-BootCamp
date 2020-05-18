"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getaddres = function () {
        return this.address;
    };
    Library.prototype.getmanager = function () {
        return this.manager;
    };
    Library.prototype.setadrees = function (newAddress) {
        this.address = newAddress;
    };
    Library.prototype.setmanager = function (newManager) {
    };
    Library.prototype.getToString = function () {
        var newArray = "";
        for (var i = 0; i < this.books.length; i++) {
            newArray += "libro" + (i + 1) + ":\n" + (this.books[i].gettoString() + "\n");
        }
        return newArray;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.getfindByAuthor = function (author) {
        var librosAutor = new Array(this.books.length);
        var k = 0;
        for (var a = 0; a < this.books.length; a++) {
            if (this.books[a].getAuthor() == author) {
                librosAutor[k] = this.books[a];
                k++;
            }
        }
        return librosAutor;
    };
    return Library;
}());
exports.Library = Library;
