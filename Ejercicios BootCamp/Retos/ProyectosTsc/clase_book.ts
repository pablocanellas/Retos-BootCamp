export class Book{
    private title:string;
    private nPages:number;
    private issn:string;
    private autor:string;
    private editorial:string;
    constructor(title:string,nPages:number,issn:string,autor:string,editorial:string){
        this.title=title;
        this.nPages=nPages;
        this.issn=issn;
        this.autor=autor;
        this.editorial=editorial;
    }
    public getTitle():string{
        return this.title;
    }
    public getnPages():number{
        return this.nPages;
    }
    public getIss():string{
        return this.issn;
    }
    public getAuthor():string{
        return this.autor;
    }
    public getEditorial():string{
        return this.editorial;
    }
    public setTittle(newTitle:string){
        this.title=newTitle;
    }
    public setnPages(newnPages:number){
        this.nPages=newnPages;
    }
    public setIss(newIssn:string){
        this.issn=newIssn;
    }
    public setAuthor(newAuthor:string){
        this.autor=newAuthor;
    }
    public setEditorial(newEditorial:string){
        this.editorial=newEditorial;
    }
    public gettoString(){
        return "Title-"+this.getTitle()+"\n"+"Number of Pages-"+this.getnPages()+"\n"+"ISS-"+this.getIss()+"\n"+"Author-"+this.getAuthor()+"\n"+"Editorial-"+this.getEditorial();
    }
}
