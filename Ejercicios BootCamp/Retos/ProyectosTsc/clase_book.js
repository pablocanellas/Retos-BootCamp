"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, issn, autor, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.issn = issn;
        this.autor = autor;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.getIss = function () {
        return this.issn;
    };
    Book.prototype.getAuthor = function () {
        return this.autor;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setTittle = function (newTitle) {
        this.title = newTitle;
    };
    Book.prototype.setnPages = function (newnPages) {
        this.nPages = newnPages;
    };
    Book.prototype.setIss = function (newIssn) {
        this.issn = newIssn;
    };
    Book.prototype.setAuthor = function (newAuthor) {
        this.autor = newAuthor;
    };
    Book.prototype.setEditorial = function (newEditorial) {
        this.editorial = newEditorial;
    };
    Book.prototype.gettoString = function () {
        return "Title-" + this.getTitle() + "\n" + "Number of Pages-" + this.getnPages() + "\n" + "ISS-" + this.getIss() + "\n" + "Author-" + this.getAuthor() + "\n" + "Editorial-" + this.getEditorial();
    };
    return Book;
}());
exports.Book = Book;
