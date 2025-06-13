const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    fullname: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    city: {
        type: String
    }
})  

module.exports  = mongoose.model("Employee", employeeSchema)    