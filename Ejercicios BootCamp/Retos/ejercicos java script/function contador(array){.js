function contador(array) {
    var ovejas = 0;
    var tamano = array.length;
    for (var i = 0; i < tamano; i++) {
        if (array[i] === "true") {
            ovejas++;
        }
    }
    return ovejas;

}
contador(["true", "false", "true", "false"]);