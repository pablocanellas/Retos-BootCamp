class Password {
    constructor(password, length = 8) {
        this.password = password;
        this.length = length;
    }
    getpassword() {

        return this.password;
    }
    setpassword(newPassword) {
        this.password = newPassword;
    }
    getlength() {
        return this.length;
    }
    setlength(newLength) {

        this.length = newLength;
    }
    getIsStrong() {
        let i = 0;
        let Mayuscula = 0;
        let Caracter_especial = 0;
        let Numero_especial = 0;
        let Incorrecto = 0;
        for (i = 0; i < (this.length); i++) {
            if (this.password.charCodeAt(i) <= 32) {
                ++Incorrecto;

            }
            if ((this.password.charCodeAt(i) >= 65 && this.password.charCodeAt(i) <= 90)) {
                ++Mayuscula;
            }
            if (((this.password.charCodeAt(i) >= 33 && this.password.charCodeAt(i) <= 47) || (this.password.charCodeAt(i) >= 58 && this.password.charCodeAt(i) <= 64) || (this.password.charCodeAt(i) >= 91 && this.password.charCodeAt(i) <= 96) || (this.password.charCodeAt(i) >= 123))) {
                ++Caracter_especial;


            }
            if ((this.password.charCodeAt(i) >= 48 && this.password.charCodeAt(i) <= 57)) {
                ++Numero_especial;

            }

        }
        if (Mayuscula > 0 && Caracter_especial > 0 && Numero_especial > 0 && Incorrecto == 0 && this.length >= 8) {
            return true;

        } else {
            return false;
        }

    }
    getGeneratePass() {



        let a = 0;
        this.pasword = "";

        for (a = 0; a < 8; a++) {

            let Caracter = String.fromCharCode(Math.round((Math.random() * 94) + 33));
            this.pasword += Caracter;
        }

        return this.pasword;
    }
}
let pasword1 = new Password(8, "");
let pasword2 = new Password(8, "Lara!a2r");
console.log(pasword1.getGeneratePass());
console.log(pasword2.getIsStrong());