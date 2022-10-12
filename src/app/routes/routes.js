const express = require('express');
const router = express.Router();
const Figure = require('../../models/figure');
const Topic = require('../../models/topics');

// test
router.get('/test', async(req, res) => {
  res.send({ message: "jetzt mit PostgreSQL" });
});

// get all Figures
router.get('/allFigures', async(req, res) => {
  const allFigures = await Figure.find();
  res.send(allFigures);
});



// get all Topics
router.get('/allTopics', async(req, res) => {
  const allTopics = await Topic.find();
  res.send(allTopics);
});
module.exports = router;
