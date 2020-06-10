class profesional {
    constructor(name, age, genre, weight, height, hairColor, eyesColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyesColor = eyesColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    toPrint() {
        return ("Nombre: " + this.name + "\n" + "Edad: " + this.age + "\n" + "Genero: " + this.genre + "\n" + "Peso: " + this.weight + "\n" + "Altura: " +
            this.height + "\n" + "Color de Pelo: " + this.hairColor + "\n" + "Color de Ojos: " + this.eyesColor + "\n" + "Carrera: " + this.race + "\n" + "Retirado: " + this.isRetired + "\n" + "Nacionalidad: " + this.nationality + "\n" + "Nº Oscars: " + this.oscarsNumber + "\n" + "Porfesion: " + this.profession + "\n");

    }

}
class movie {
    constructor(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseyear = releaseYear;
        this.actors = Array();
        this.nacionality = nationality;
        this.director = null; //para objetos  inicializar simepre null
        this.writer = null;
        this.language = "";
        this.plataform = "";
        this.isMCU = "";
        this.mainCharacterName = null;
        this.producer = "";
        this.distributor = "";
        this.genre = genre;
        this.descripcion = "";

    }
    toprint() {

        var actores = "";
        for (let i = 0; i < this.actors.length; i++) {
            actores += this.actors[i].toPrint();
        }
        return (actores + "titulo: " + this.title + "\n Año de lanzamiento: " + this.releaseyear + "\n Actores: " + "\n nacionalidad: " + this.nacionality + "\n director" + this.director.toPrint() + "\n writer: " + this.writer.toPrint() + "\n Idioma: " + this.language + "\n Plataforma: " + this.plataform + "\n MCU: " + this.isMCU + "\n Personaje Principal: " + this.mainCharacterName.toPrint() + "\n Productor:" + this.producer + "\n Distribuidor: " + this.distributor + "\n");
    }
    desk1() {
        return this.descripcion;
    }




}

var profesional_Uma = new profesional("Uma Karuna", 50, "femenino", 55, 183, "rubio", "azul", "exmodelo", "no", "Americana", "no", "actor");
var profesinal_Dicaprio = new profesional("Dicaprio", 45, "masculino", 70, 180, "castaño", "azul", "economista", "NO", "Americana", 1, "actor");
var profesional_Quentin = new profesional("Quentin", 60, "masculino", 80, 170, "calvo", "marron", "Director", "NO", "Americana", 1, "director");
var movie_kill1 = new movie("Kill Bill Vol.1", 2003, "Americana", "Tarantino");
movie_kill1.actors = [profesional_Uma, profesinal_Dicaprio];
movie_kill1.director = profesional_Quentin;
movie_kill1.writer = profesional_Quentin;
movie_kill1.distributor = "Miramax";
movie_kill1.isMCU = "NO";
movie_kill1.mainCharacterName = profesional_Uma;
movie_kill1.language = "Ingles";
movie_kill1.producer = "A Band Apart";
movie_kill1.plataform = "Netflix";
movie_kill1.descripcion = "n Kill Bill: Volumen 1, una mujer embarazada, identificada como la Novia, es masacrada y tiroteada en la cabeza, en el ensayo de su boda en una pequeña iglesia al sur de Texas, por sus antiguos camaradas del Escuadrón Asesino Víbora Letal, un grupo de asesinos profesionales que trabajan para el mejor postor, venganza, guerra de bandas de traficantes de drogas y asesinatos políticos. Por la venganza de su exnovio Bill, que fue abandonado por la Novia y trataba de alejarse de la banda, para iniciar una nueva vida alejada de la violencia.Después de caer en un profundo coma durante cuatro años, al despertar, se entera de que ya no tiene a su bebé nonato, escapa del hospital y comienza una inmediata venganza contra todos los asesinos que participaron en la masacre de la iglesia."
var movie_kill2 = new movie(" kill Bill Vol.2", 2004, "Americana", "Tarantino");
movie_kill2 = [profesional_Uma, profesinal_Dicaprio]
movie_kill2.director = profesional_Quentin;
movie_kill2.writer = profesional_Quentin;
movie_kill2.distributor = "Miramax";
movie_kill2.isMCU = "NO";
movie_kill2.mainCharacterName = profesional_Uma;
movie_kill2.language = "Ingles";
movie_kill2.producer = "A Band Apart";
movie_kill2.plataform = "Netflix";
var pelicula_actual;



function pantalla(pelicula) {

    var descripcion_texto = pelicula.toprint();
    document.getElementById('caracteristicas').innerHTML = descripcion_texto;
    mostrarPelicula();

}

function descripcion2(pelicula) {
    var desk = document.createElement("P");
    var desk_pelicula = pelicula.descripcion;

    document.getElementById('descripcion1').innerHTML = desk_pelicula;

}


function info() {
    var Pelicula = document.getElementById("pelicula").value;
    var Director = document.getElementById("director").value;
    var Escritor = document.getElementById("escritor").value;
    var Actor = document.getElementById("actor").value;
    var Productor = document.getElementById("productor").value;
    var Distribuidor = document.getElementById("distribuidor").value;
    var Idiomas = document.getElementById("idiomas").value;
    var Genero = document.getElementById("genero").value;
    var Plataforma = document.getElementById("plataforma").value;
    var ISMCU = document.getElementById("ISMCU").value;
    var Año = document.getElementById("año").value;
    var Nacionalidad = document.getElementById("nacionalidad").value;
    var Description = document.getElementById("msg").value;
    alert("Nombre Pelicula: " + Pelicula + "\nNombre Director: " + Director + "\nEscritor: " + Actor + "\nProductor: " + Productor + "\nDistribuidor: " + Distribuidor + "\nIdiomas: " + Idiomas + "\nGenero: " + Genero + "\nPlataforma: " + Plataforma + "\nISMCU: " + ISMCU + "\nAño de  Lanzamineto: " + Año + "\nNacionalidad: " + Nacionalidad + "\nDescripcion: " + Description);
    if (Director != "Quentin Tarantino" || Director[0] != "Q") {
        alert(" El director No es Quentin Tarantion  Con Lo cual La pelicula no sera introducida en la Pagina");

    }

}

function mostrarPelicula() {
    $("#descripcion1").html(movie_kill1.descripcion);
}