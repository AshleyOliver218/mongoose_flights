const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model

const destinationSchema = new mongoose.Schema({
arrival: {type:[Date]},
airport: {type:String, enum:['AUS', 'DAL', 'LAX', 'SAN','SEA'], },
   
});

const Destination = mongoose.model('destinations', destinationSchema);

module.exports = Destination;