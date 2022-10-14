const express = require('express');
const routes = require('./src/app/routes/routes.js');
const cors = require('cors');
const mongoose = require('mongoose');
const database = require("./src/config/database.config");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/', routes);

// mongoose.connect(database.remoteUrl); 	// Connect to MongoDB instance
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('connected to DB');
// });

mongoose.connect(database.remoteUrl)
.then (() => {
  console.log('Connected to DB');
  app.listen(port, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Server started and listening on port ${port} ... `);
    }
  })
})

// app.listen(port, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(`Server started and listening on port ${port} ... `);
//   }
// });




