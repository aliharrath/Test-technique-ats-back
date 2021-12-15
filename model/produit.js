const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const produitSchema = new Schema({
    productName:  String,
    description: String,
    price:   Number,
    category: String,
    imageUrl: String,
    reviews:  [ {   value: { type : Number}, content : { type : String }}], 
});

module.exports = produitSchema ;