//Reto1

printer_arrow = (elem) => {

    if (elem != undefined) {
        console.log(elem);
    } else {
        console.log("no as introducido ningun parametro");
    }
}
console.log(printer_arrow());


//REto2

multiply_arrow = (y = 0, x = 0) => {

    console.log(x * y);
}
console.log(multiply_arrow(5, 4));

//Reto3
SumaArray_arrow = (array) => {
    let i = 0;
    let resultadoSuma = 0;
    if (array != Array) {
        console.log("No has introducido un array como parametro de entrada");
    } else if (array == undefined) {
        console.log(0);
    } else {
        for (i = 0; i < array.length; i++) {

            resultadoSuma += array[i];
        }
        return resultadoSuma;
    }

}