function arcoiris(array)
{
    
    for (let i = 0; i<array.length; i++)
    {
        if (array[i] === "verde" || array[i] === "azul" || array[i] === "amarillo"|| array[i] === "rojo"
        || array[i] === "naranja"||array[i] === "morado") {
            console.log("Si esta en el arcoiris");
        }

        else {
            console.log("No esta en el arcoiris");
        }
    }
 
}


 
arcoiris(["negro"]);