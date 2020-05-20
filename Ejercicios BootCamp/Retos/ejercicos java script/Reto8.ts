function SumaCar(Array){
    let Resultado=0;
    for(let i=0;i<Array.length;i++){
        for(let a=0;a<Array[i].length;a++){

            ++Resultado;
        }
        
        
    }
    return Resultado;
}