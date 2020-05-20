 function delreves(cambiar){
     let tamano = cambiar.length;
     let letra = new Array(tamano);

    for (let i = 0; i < tamano; i++) {
        letra[i]= cambiar[tamano - i - 1];



    }
    return letra;
}
