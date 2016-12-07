// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// will add the Currency type to the mongoose Schema types
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

// crete a Schema
var promotionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  price: {
    type: Currency,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// create a model
var Promotions = mongoose.model('Promotion', promotionSchema);

// make this available to our Node applications
module.exports = Promotions;
