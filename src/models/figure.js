const mongoose = require('mongoose');

const figureSchema = new mongoose.Schema({
  name: String,
  articleNumber: String,
  purchasePrice: String,
  salePrice: String
});

module.exports = mongoose.model('Figure', figureSchema);
