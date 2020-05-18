function Asci(Caedena) {
    var Numeros = "";

    for (var i = 0; i < Caedena.length; i++) {
        Numeros += Caedena.charCodeAt(i);

        Numeros += " ";



    }
    return Numeros;

}


console.log(Asci("Codenotch and Javascript are awesome!"));

// Cambiar  A ECMasScript

Asci_arrow = (Cadena) => {
    let Numeros = "";
    let i = 0;
    for (i = 0; i < Cadena.length; i++) {

        Numeros += Cadena.charCodeAt(i);

        Numeros += " ";
    }
    return Numeros;
}