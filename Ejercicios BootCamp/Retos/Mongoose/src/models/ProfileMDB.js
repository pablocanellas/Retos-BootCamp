const mongoose = require("mongoose");


let Profile = mongoose.Schema;



const ProfileSchema = new Profile({
    name: {
        type: String,
        enum: ["Pablo", "Lara", "Carlos", "Teresa", "Jaime"]
    },
    surname: {
        type: String,
        enum: ["Sanchez", "Garcia", "Cuerda"]
    },
    yearOfBirth: {
        type: Number,
        min: 1955,
        max: 2002
    },
    comments: String,
    role: String

});



ProfileSchema.pre('save', function(next) {
    console.log("Middleware de entrada");
    if (this.yearOfBirth < 1955 || this.yearOfBirth > 2002) {
        console.log(" Eres Mayor de  65 años");
        next();
    } else {
        console.log(" la edad es correcta ");
        next();
    }

});
module.exports = mongoose.model("Profile", ProfileSchema, "profile");