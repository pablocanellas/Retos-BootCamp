import{Person}from"./clase_PERSON";
export class Calendar{
    public people: Person[] ;
    constructor(){
        this.people=new Array;
    }
     public getprintCalendar(){
        for(let i=0;i<this.people.length;i++){
            console.log(this.people[i].gettodaInfo());
        }
       
    }
}
let texto:string
texto=""