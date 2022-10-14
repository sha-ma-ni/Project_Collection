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
    articleNumber: req.body.articleNumber,
    purchasePrice: req.body.purchasePrice,
    salePrice: req.body.salePrice,
  })
  await newFigure.save();
  res.send(newFigure);
});

// // get figure id
// router.get('/:id', async(req, res) => {
//   try {
//     const figure = await Figure.findOne({ _id: req.params.id });
//     console.log(req.params);
//     res.send(figure);
//   } catch {
//     res.status(404);
//     res.send({
//       error: "artikel does not exist!"
//     });
//   }
// });
//
// //delete Figure
// router.delete ('/figures/:id', async (req, res) =>{
//   try {
//     await Figure.deleteOne({ _id: req.params.id })
//     res.status(204).send()
//   } catch {
//     res.status(404)
//     res.send({ error: "artikel does not exist!" })
//   }
// })

// get all Sets
router.get('/allSets', async(req, res) => {
  const allSets = await Set.find();
  res.send(allSets);
});

// post Set
router.post('/newSet', async(req, res) => {
  const newSet = new Set({
    name: req.body.name,
    articleNumber: req.body.articleNumber,
    purchasePrice: req.body.purchasePrice,
    salePrice: req.body.salePrice,
  })
  await newSet.save();
  res.send(newSet);
});


module.exports = router;
