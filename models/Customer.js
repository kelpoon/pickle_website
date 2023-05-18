// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CUSTOMER SCHEMA
const CustomerSchema = new Schema({
    // Simple declaration of datatype that will be used:
    name: {
        type: String
    }, 

    // You can add specifics to each one too that help with validation, like making something required, or unique
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    priorCustomer: {
        type: String
    }, 

    // currentCart: {
    //     type: Cart
    // }, 
});

module.exports = mongoose.model("Customer", CustomerSchema);