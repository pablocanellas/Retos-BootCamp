function suma(Numero1, Numero2) {
    return Numero1 + Numero2;

}

function resta(Numero1, Numero2) {
    return Numero1 - Numero2;
}

function division(Numero1, Numero2) {
    return Numero1 / Numero2;
}

function multiplicar(Numero1, Numero2) {
    return Numero1 * Numero2;
}
/*
module.exports = {
    suma: (Numero1, Numero2) => {
        return Numero1 + Numero2;

    },

    resta: (Numero1, Numero2) => {
        return Numero1 - Numero2;
    },

    division: (Numero1, Numero2) => {
        return Numero1 / Numero2;
    },

    multiplicar: (Numero1, Numero2) => {
        return Numero1 * Numero2;
    },


};
*/

module.exports = { suma, resta, division, multiplicar };