import{Vector}from"./clase_vector";
 export class Matrix{
    private elements:Vector[];
    constructor(n:number,m:number,k:number){
        this.elements=new Array(n);
        for(let i=0;i<n;i++){ 
            this.elements[i]=new Vector(m,k);
        }
    }
    public getelements():Vector[]{
        return this.elements;
    }
    public getelement(a:number):Vector{
       return this.elements[a];
    }
    public setelements(newElementes:Vector[]){
        this.elements=newElementes;

    }
    public setelement(newElement:Vector,n:number){
        this.elements[n]=newElement;

    }
    public getprint(){
        for(let a=0;a<this.elements.length;a++){
            console.log(this.getelement(a).getPrint()+"\n");
        }
    }
    public getadd(m1:Matrix):Matrix{
        let sumaMatrix=new Matrix(m1.getelements().length,m1.getelement(0).getElement.length,0);
        for (let v=0;v<m1.getelements().length;v++){
            sumaMatrix.setelement(this.elements[v].getAdd(m1.getelement(v)),v);
        }
        

        return sumaMatrix;
    }
    public getmultnumber(n:number):Matrix{
        let Multnumber=new Matrix(this.elements.length,this.elements[0].getElement.length,0);
        for(let i=0;i<this.elements.length;i++){
            Multnumber.setelement(this.elements[i].getMultNumber(n),i);

        }
        return Multnumber;

        
    }
    public getMultespecial(n:number):Matrix{
        let multespecial=new Matrix(this.elements.length,this.elements[0].getElement.length,0);
        for(let c = 0;c<this.elements.length;c++){
            for(let s=0;s<this.elements[c].getelements().length;s++){
                if(this.elements[c].getElement(s)%2==0){
                    multespecial.elements[c].setElemts(s,n*(this.elements[c].getElement(s)));
                }
                else{
                    multespecial.elements[c].setElemts(s,(n-1)*(this.elements[c].getElement(s)));

                }
            }

        }
        
        return multespecial;
    }

}