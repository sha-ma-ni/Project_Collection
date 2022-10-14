const express = require('express');
const router = express.Router();
const Figure = require('../../models/figure');
const Set = require('../../models/sets');

// test
router.get('/test', async(req, res) => {
  res.send({ message: "Hallo. This is test" });
});

// get all Figures
router.get('/allFigures', async(req, res) => {
  const allFigures = await Figure.find();
  res.send(allFigures);
});

// post Figure
router.post('/newFigure', async(req, res) => {
  const newFigure = new Figure({
    name: req.body.name,
    artikelNummer: req.body.artikelNummer,
    // purchasePrice: String,
   // salePrice: String,
  })
  await newFigure.save();
  res.send(newFigure);
});

// get all Sets
router.get('/allSets', async(req, res) => {
  const allSets = await Set.find();
  res.send(allSets);
});

// post Set
router.post('/newSet', async(req, res) => {
  const newSet = new Set({
    name: req.body.name,
    artikelNummer: req.body.artikelNummer,
    // purchasePrice: String,
    // salePrice: String,
  })
  await newSet.save();
  res.send(newSet);
});


module.exports = router;
