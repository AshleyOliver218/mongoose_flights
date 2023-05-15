const express = require('express')
//instantiate express
const app = express()
//instantiate port
const port = 3000
const Flight = require('./models/flights.js')
const mongoose = require('mongoose');
const database =require('./config/database.js')
require('dotenv').config()
//midware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//routes
//Index
app.get('/flights', (req, res)=>{
  Flight.find({}, (error, allFlights)=>{
      res.render('flights/Index', {
          flights: allFlights
      });
  });
});
//New
app.get('/flights/new', (req, res) => {
  res.render('New');
});
//Delete
// Update
// Create
app.post('/flights/', (req, res)=>{
  if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true;
  } else { //if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false;
  }
  Flight.create(req.body, (error, createdFlight)=>{
      res.redirect('/flights');
  });
});

// Show
app.get('/flights/:id', (req, res)=>{
  Flight.findById(req.params.id, (err, foundFlight)=>{
      res.render('Show', {
          fruit:foundFlight
      });
  });
});




app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
})