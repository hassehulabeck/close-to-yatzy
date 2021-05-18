const mongoose = require('mongoose')

const diceSchema = mongoose.Schema({
    value: {
        type: Number,
        min: 1,
        max: 6
    },
    locked: Boolean
})

diceSchema.methods.roll = function() {
    if (!this.locked) {
        this.value = Math.floor(Math.random() * 6)
    }
}

const Dice = mongoose.model('Dice', diceSchema)

module.exports = Dice