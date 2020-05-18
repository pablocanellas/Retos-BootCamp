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

        return (Math.round((this.peso / (this.altura * this.altura)) * 100000) / 10);
    }


    getEdad(anyoActual) {

        return (anyoActual - anyoNacimiento)
    }
    getMostrarTodos() {

        console.log("\npeso: " + this.peso + "\n" + "altura: " + this.altura + "color de pelo: " + this.color_Pelo + "\n" + "año de nacimiento: " + this.anyoNacimiento + "\n" + this.aficiones);
    }
    getMostrarAficiones() {
        console.log(this.aficiones);
    }
}

module.exports = { Persona };