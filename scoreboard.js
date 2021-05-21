const mongoose = require('mongoose')

const scoreboardSchema = mongoose.Schema({
    name: String,
    points: Number,
    rounds: Number
})

const Scoreboard = mongoose.model('Scoreboard', scoreboardSchema)

module.exports = Scoreboard