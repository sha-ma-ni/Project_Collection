const mongoose = require('mongoose');

const figureSchema = new mongoose.Schema({
  name: String,
  artikelNummer: String
  // purchasePrice: String,
  // salePrice: String
});

module.exports = mongoose.model('Figure', figureSchema);
