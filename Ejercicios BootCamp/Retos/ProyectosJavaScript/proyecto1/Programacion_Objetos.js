class Persona {
    constructor(peso, altura, color_Pelo, anyoNacimiento, aficiones) {
        this.peso = peso;
        this.altura = altura;
        this.color_Pelo = color_Pelo;
        this.anyoNacimiento = anyoNacimiento;
        this.aficiones = aficiones;


    }
    getpeso() {

        return this.peso;
    }
    setpeso(newPeso) {
        this.peso = newPeso;
    }
    getaltura() {

        return this.altura;

    }
    setaltura(newAltura) {
        this.altura = newAltura;
    }
    getcolor_Pelo() {

        return this.color_Pelo;
    }
    setcolor_Pelo(newPelo) {

        this.color_Pelo = newPelo;
    }
    getanyoNacimiento() {

        return this.anyoNacimiento;
    }
    setanyoNacimiento(newYear) {

        this.anyoNacimiento = newYear;
    }
    getaficiones() {
        return this.aficiones;
    }
    setaficiones(newAficiones) {
        this.aficiones = newAficiones;
    }

    getIMC() {

        console.log(Math.round((this.peso / (this.altura * this.altura)) * 100000) / 10);
    }


    getEdad(anyoActual) {

        return (anyoActual - anyoNacimiento)
    }
    getMostrarTodos() {

        console.log("\npeso: " + this.peso + "\n" + "altura: " + this.altura + "color de pelo: " + this.color_Pelo + "\n" + "año de nacimiento: " + this.anyoNacimiento + "\n" + this.aficiones);
        return " ";
    }
    getMostrarAficiones() {
        console.log(this.aficiones);
    }


}
class Agenda {
    constructor(Personas) {
        this.Personas = Personas;

    }
    getPersonas() {
        return this.Personas;
    }
    setPersonas(NewPersonas) {
        this.Personas = NewPersonas;
    }
    getPrintPersonas() {
        for (var i = 0; i < (this.Personas).length; i++) {
            console.log(this.Personas[i].getMostrarTodos());
        }

    }
}
var Persona1 = new Persona(80, 190, "Negro", 1992, ["futbol", "baloncesto", "gamer"]);
var Persona2 = new Persona(70, 182, "rubio", 1991, ["comer", "correr", "amigos"]);
var Persona3 = new Persona(92, 178, "castaño", 1994, ["pintar", "jugar", "Leer"]);
var Agenda1 = new Agenda([Persona1, Persona2, Persona3]);

//Agenda1.getPrintPersonas();
//Persona1.getMostrarTodos();
//Persona1.getMostrarAficiones();
Persona1.getIMC();