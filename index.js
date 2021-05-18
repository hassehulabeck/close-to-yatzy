const express = require('express')
const app = express()
const Dice = require('./dice')

const diceHolder = []

// Skapa fem tärningar
for (let i = 0; i < 5; i++) {
    diceHolder.push(newDice())
}

function newDice() {
    return new Dice({
        value: Math.floor(Math.random() * 6),
        locked: false
    })
}
// Skriv ut tärning 2
console.log(diceHolder[1])

// Ändra värde på tärning 2
diceHolder[1].value = 3
console.log(diceHolder[1])


app.listen(3000, () => {
    console.log('Webbserver aktiv.')
})