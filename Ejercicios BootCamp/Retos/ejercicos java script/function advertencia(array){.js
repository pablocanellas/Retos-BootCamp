function advertencia(array) {
    var tamano = array.length;

    for (var i = 0; i < tamano; ++i) {
        if (array[i] === "lobo") {
            if (i === tamano - 1) {
                return ("Por favor, vete y deja de comerse mis ovejas");
            } else {
                var oveja = tamano - i;
                return ("¡Oih! oveja numero " + oveja + "! estas apunto de ser comida por el lobo");
            }
        }
    }
}
advertencia(["oveja", "lobo", "oveja", "oveja"]);