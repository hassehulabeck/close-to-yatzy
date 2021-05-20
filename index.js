const express = require('express')
const app = express()
const Dice = require('./dice')
const Scoreboard = require('./scoreboard')

const diceHolder = []

app.use(express.urlencoded({ extended: true }))



app.get('/play', (req, res) => {

    // Skriva in namnet i scoreboard
    Scoreboard.name = req.body.name

    // Skapa fem tärningar
    for (let i = 0; i < 5; i++) {
        diceHolder.push(newDice())
    }

    // Rulla alla första gången
    diceHolder.forEach((dice) => {
        dice.roll()
    })
    highScore()
    res.json(diceHolder)
})

// Rulla en tärning
app.post('/roll/:id', (req, res) => {
    // Översätt 1-5 till 0-4 för att få nollindex
    let index = req.params.id - 1

    diceHolder[index].roll()

    // Kontrollera ev poäng
    highScore()
    res.json(diceHolder)
})

// Locka eller unlocka en tärning
app.post('/lock/:id', (req, res) => {
    // Översätt 1-5 till 0-4 för att få nollindex
    let index = req.params.id - 1

    // Vänd på true/false
    diceHolder[index].locked = !diceHolder[index].locked
    res.json(diceHolder)
})



function highScore() {
    let summa = 0

    // Lite äldre kod
    // diceHolder.forEach(dice => {
    //     summa += dice.value
    // })


    // Med reduce

    summa = diceHolder.reduce((acc, dice) => {
        return acc + dice.value
    }, 0)

    if (summa > 22) {
        console.log("Över 22")
        Scoreboard.points += 2
    }

}



function newDice() {
    // Skapa en tärning med 0-värde
    let dice = new Dice({
            value: 0,
            locked: false
        })
        // Utnyttja den inbyggda roll-funktionen
    dice.roll()
    return dice
}


app.listen(3000, () => {
    console.log('Webbserver aktiv.')
})