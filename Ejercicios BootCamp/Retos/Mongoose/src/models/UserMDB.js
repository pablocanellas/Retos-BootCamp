const mongoose = require("mongoose");

let UserId = mongoose.Schema;


const UserIdSchema = new UserId({
    login: String,
    password: {
        type: String,
        validate: [
            function(password) {
                return password.length >= 8;
            },

            'El pasword deberia de ser mas largo'
        ]
    }
});


module.exports = mongoose.model("USerId", UserIdSchema, "userId");