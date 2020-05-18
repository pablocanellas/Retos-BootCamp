function corregir(String) {
    var newtexto = "";
    for (var i = 0; i < String.length; ++i) {
        switch (String[i]) {
            case '5':
                newtexto += "S";
                break;
            case '0':
                newtexto += "O";
                break;
            case '1':
                newtexto += "I";
                break;
            default:
                newtexto += String[i];
                break;



        }
    }
    return newtexto;
}

var texto = prompt("escribe la palabra a corregir ");
corregir(texto);