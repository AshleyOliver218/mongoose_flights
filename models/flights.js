const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model

const flightSchema = new mongoose.Schema({
    airline:  { type: String, enum:['American', 'Southwest', 'United']},
    flightNo: {type: Number, min: 10, max:9999 },
    departs: {type: date}
});

const Flight = mongoose.model('flights', flightSchema);

module.exports = Flight;