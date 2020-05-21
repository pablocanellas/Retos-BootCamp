export class Punto{
    private x:number;
    private y: number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
    public getx():number{
        return this.x;
    }
    public gety():number{
        return this.y;
    }
    public setx(newx:number){
        this.x=newx;
    }
    public sety(newy:number){
        this.y=newy;
    }
    public getstring():string{

        return"("+ this.x +","+ this.y +")";
    }
    public distanciaAlOrigen():number{
        return Math.sqrt(this.x*this.x - this.y*this.y);
    }
    public calcularDistancia(otroPunto:Punto):number{
       let  x1: number=this.x-otroPunto.getx();
       let y1:number= this.y-otroPunto.gety();
       return Math.sqrt(x1 * x1 + y1 * y1);
    }
    public calcularCuadrante():number{
        let resultado:number=0;
        if(this.x>0.0 && this.y>0.0){
            resultado=1;
        }
        else if(this.x<0.0 && this.y>0.0){
            resultado=2;
        }
        else if(this.x<0.0 && this.y<0.0){
            resultado=3
        }else if(this.x>0.0 && this.y<0.0){
            resultado=4
        }
        else{      //(x==0.0 || y==0.0)
             resultado=0;
        }

        return resultado;
    }
    public  calcularMasCercano(otrosPuntos:Punto[]):Punto{
       let  puntoMasCercano:Punto=null;
       if(otrosPuntos!=null && otrosPuntos.length>0){
           let distaciaMinima:number=this.calcularDistancia(otrosPuntos[0]);

           for(let i=0;i<otrosPuntos.length;i++){
               let distancia:number= this.calcularDistancia(otrosPuntos[i]);
               if(distancia<distaciaMinima){
                   distancia=distaciaMinima;
                   puntoMasCercano=otrosPuntos[i];
               }
           }

       }
        return puntoMasCercano;
    }
}
export class Triangulo{
    private vertice1:Punto;
    private vertice2:Punto;
    private vertice3:Punto;
    constructor(vertice1:Punto,vertice2:Punto,vertice3:Punto){
        this.vertice1=vertice1;
        this.vertice2=vertice2;
        this.vertice3= vertice3;
    }
    public getVertice1():Punto{
        return this.vertice1;
    }
    public getVertice2():Punto{
        return this.vertice2;
    }
    public getVertice3():Punto{
        return this.vertice3;
    }
    public setVertice1(newVertice1:Punto){
        this.vertice1=newVertice1;
    }
    public setVertice2(newVertice2:Punto){
        this.vertice2=newVertice2;
    }
    public setVertice3(newVertice3:Punto){
        this.vertice3=newVertice3;
    }
    public calcularLongitudLados():number[]{
        let longitudLados:number[]=new Array[3];
        longitudLados[0]=this.vertice1.calcularDistancia(this.vertice2);
        longitudLados[1]=this.vertice1.calcularDistancia(this.vertice3);
        longitudLados[2]=this.vertice3.calcularDistancia(this.vertice1);
        return longitudLados;
    }

}