function duplicados(array) {
    var resultado = [];
    var tamano = array.length;
    var contador = 0;
    var z;
    for (var i = 0; i < tamano; ++i) { //recoorre  nuestro array de entra de la funcion de primcipio a fin 

        for (var a = i - 1; a >= 0; --a) { // recoorre el array desde la posicion anterior a la  que estamos evaluando con el anterior for  hasta el primcipio 

            if (array[i] === array[a]) { //¿si? el termino de  la posicion del array que estas evaluando en el primer for  es =  alguna  de los termninos  de las posiciones anteriores  las cuales estas evaluando en el segundo for 


                for (z = 0; z < contador; ++z) { // recorre  el array del resultado  de principio a fin 

                    if (array[a] === resultado[z]) { //¿si? el termnino de  la posicion del array que estamos evaluando  en el segundo for  es =  algun termino del array resultado los cuales evaluas en el for anterior 
                        break; // sale del for del bucle 
                    }
                }
                if (z === contador) { //¿si? la posion del array resultado  es = a  su tamaño. lo cual significaria que el for anterior se ha recorrido por completo 
                    resultado[contador] = array[i]; // añade el termino de la posicion  del array de entrada  que estamos evaluando en el primer for  a  nueva posicon que creamos en resultado 
                    ++contador; // su mamos uno al tamaño de  resultado 
                }
            }



        }
    }
    return resultado;
}

duplicados([1, 2, 4, 4, 3, 3, 1, 5, 3, 5, 5]);