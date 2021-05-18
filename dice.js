const mongoose = require('mongoose')

const diceSchema = mongoose.Schema({
    value: Number,
    locked: Boolean
})

const Dice = mongoose.model('Dice', diceSchema)

module.exports = Dice