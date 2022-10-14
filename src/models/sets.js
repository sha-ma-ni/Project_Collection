const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
  name: String,
  itemNumber: String,
  price: String
});

module.exports = mongoose.model('Set', setSchema);
