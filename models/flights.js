const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model
const destinationSchema = require('./destinations')

const flightSchema = new mongoose.Schema({
    airline:  { type: String, enum:['American', 'Southwest', 'United']},
    flightNo: {type: Number, min: 10, max:9999 },
    departs: {type: [Date]},
    airport: {type:String, enum:['AUS', 'DAL', 'LAX', 'SAN','SEA'], default:'SAN'},
    desinations: [{destinationSchema}]
});

const Flight = mongoose.model('flights', flightSchema);

module.exports = Flight;