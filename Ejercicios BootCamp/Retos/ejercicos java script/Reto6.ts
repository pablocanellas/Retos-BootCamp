function  Par(Array){
    let Resultado=false;
    
    for(let i=0;i<Array.length;i++){
        if(Array[i]%2==0){
            Resultado= true;
        }
    }
    return Resultado;
}