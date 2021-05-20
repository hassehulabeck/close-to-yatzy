const mongoose = require('mongoose')

const diceSchema = mongoose.Schema({
    value: {
        type: Number,
        min: 1,
        max: 6
    },
    numberOfRolls: Number,
    locked: Boolean
})

diceSchema.methods.roll = function() {
    // Här en spärr för att vi inte ska kunna rulla mer än två gånger. 
    if (this.numberOfRolls >= 2) {
        this.locked = true
    }
    if (!this.locked) {
        this.value = Math.ceil(Math.random() * 6)
        this.numberOfRolls++
    }
}

const Dice = mongoose.model('Dice', diceSchema)

module.exports = Dice