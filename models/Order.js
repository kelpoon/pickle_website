// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ITEM SCHEMA
const ItemSchema = new Schema({
    // Simple declaration of datatype that will be used:
    title: {
        type: String
    }, 

    description: {
        type: String
    }, 

    // Add 'enum' of an array of options to force selection between a given number of options.
    flavor: {
        type: String,
        enum: ["dill", "spicy", "gallo"],
        default: "dill"
    },

    price: {
      type: Number,
    },

    quantity: {
        type: Number,
      },
});


// CART SCHEMA
const CartSchema = new Schema({
    // Simple declaration of datatype that will be used:
    items: {
        type: Array 
    }, 
});


module.exports = mongoose.model("Item", ItemSchema);
