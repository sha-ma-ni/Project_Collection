const mongoose = require('mongoose');

const figureSchema = new mongoose.Schema({
 // idFig: String,
  name: String,
  purchasePrice: String,
  salePrice: String,
ArtikelNummer: Number,

  // date: String,
  // activity: String,
  // idPlant: String
});

module.exports = mongoose.model('Figure', figureSchema);
