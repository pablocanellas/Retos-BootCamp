import{Book}from "./clase_book"
import{Library}from "./clase_library"
let  book1:Book= new Book("Introducción a Javascript",400,"2344433-BC23333","Joseph Smith","Now Editions");
let  book2:Book= new Book("Javascript avanzado",300,"2344433-BC23335","Joseph Smith","Now Editions");
let  book3:Book= new Book("Introducción a Typescript",340,"2344434-BC23333","Joseph Adam","Now Editions");
let library1:Library= new Library([book1,book2,book3],"condado de treviño","pablo");
console.log(library1.getfindByAuthor("Joseph Smith"));
console.log(library1.getToString());
console.log(library1.getaddres());
console.log(book3.setEditorial("Maldonado"));
