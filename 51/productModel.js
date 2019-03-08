const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//Schema is the blueprint that defines the Model
const Product = new Schema({
    // id: Schema.Types.ObjectId,
    id: ObjectId,
    brand: String,
    title: {
        type: String,
        unique: true
    },
    price: {
        type: Number,
        min: 1,
        max: 999,
        required: true // you can not save a product object with out its price
    }
  });


// collection is a like a table
// mongo will lower case it and pluralize it, so Product will be products
// // first arg is the getter and second argument is the setter
// DEFINE OR RETRIEVES A MODEL
/**
 * @param name (products)
 * @param schema? (Products)
 * @param collection?
 */ 
var ProductModel = mongoose.model('products', Product);

module.exports = ProductModel;