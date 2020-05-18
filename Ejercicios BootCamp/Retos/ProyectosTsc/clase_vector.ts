 export class Vector{
    private elements:number[];
    constructor(n:number,k:number){
        this.elements=new Array(n);
        for(let i=0;i<n;i++){
            this.elements[i]=Math.random()*k;
        }
    }
    public getelements():number[]{

        return this.elements;
    }
    public setElemts(a:number,c:number){
        this.elements[a]=c
    }
    public getElement(a:number):number{
        return this.elements[a];

    }
    public getPrint(){
        for(let x=0;x<this.elements.length;++x){

                 console.log(this.elements[x]);
        }


        
    }
    public getAdd(v1:Vector):Vector{
        let sumaVector=new Vector(this.elements.length,0);
        for(let a=0;a<this.elements.length;a++){

            sumaVector.setElemts(a,v1.getElement(a)+this.elements[a]);

        }
        return sumaVector;

    }
    public getSubs(v1:Vector):Vector{
        let restaVector=new Vector(this.elements.length,0);
        for(let a=0;a<this.elements.length;a++){

            restaVector.setElemts(a,this.elements[a]-v1.getElement(a));

        }
        return restaVector;
    }
    public getmult(v1:Vector):Vector{
        let multVector=new Vector(this.elements.length,0);
        for(let a=0;a<this.elements.length;a++){

            multVector.setElemts(a,v1.getElement(a)*this.elements[a]);

        }
        return multVector;
    }

    public getMultNumber(n:number):Vector{
        let multNumber=new Vector(this.elements.length,0);
        for(let a=0;a<this.elements.length;a++){

            multNumber.setElemts(a,n*this.elements[a]);

        }
        return multNumber;
    }


}