const express = require('express')
//instantiate express
const app = express()
//instantiate port
const port = 3000
const Flight = require('./models/flights.js')
const Destination = require('./models/destinations.js')
const mongoose = require('mongoose');
require('dotenv').config()
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

//connection messages
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: "));
db.on("close", () => console.log("mongo disconnected"));

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
      res.render('Index', {
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