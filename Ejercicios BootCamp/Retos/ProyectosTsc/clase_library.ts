import{Book}from "./clase_book";
export class Library{
    private books:Book[];
    private address:string;
    private manager:string;
    constructor(books:Book[],address:string,manager:string)
    {
        this.books=books;
        this.address=address;
        this.manager=manager;
    }
    public getaddres():string{
        return this.address;
    }
    public getmanager():string{
        return this.manager;
    }
    public setadrees(newAddress:string){
        this.address=newAddress;
    }
    public setmanager(newManager:string){

    }
    public getToString():String{
         let newArray= "";
        for(let i=0;i<this.books.length;i++){

            newArray+="libro"+(i+1)+":\n"+(this.books[i].gettoString()+"\n");
        }
        return newArray;
    }
    public getNumberOfBooks():number{
        
        return this.books.length;
    }
    public getfindByAuthor(author:string):Book[]{
        let librosAutor=new Array;
        let k=0;
        for(let a=0;a<this.books.length;a++){
            if(this.books[a].getAuthor()==author){
                librosAutor[k]= this.books[a];
                k++;
            }
        }
        return librosAutor;
    }

}