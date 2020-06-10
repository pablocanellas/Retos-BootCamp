const mongoose = require("mongoose");


let Creedentials = mongoose.Schema;



const creedentialsSchema = new Creedentials({
    address: String,
    phone: {
        type: Number,
        validate: [
            function(phone) {
                if (phone[0] == 3 && phone[1] == 4 && phone.length == 11) {
                    return phone;
                } else {
                    'El  numero no es español no empieza por 34 '
                }

            }
        ]
    },
    email: String

});
module.exports = mongoose.model("Creedentials", creedentialsSchema, "creedentials");