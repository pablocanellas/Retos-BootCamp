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
module.exports = { Agenda };