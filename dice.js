const mongoose = require('mongoose')

const diceSchema = mongoose.Schema({
    value: {
        type: Number,
        min: 1,
        max: 6
    },
    locked: Boolean
})

const Dice = mongoose.model('Dice', diceSchema)

module.exports = Dice