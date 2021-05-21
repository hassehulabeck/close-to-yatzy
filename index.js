const express = require('express')
const app = express()
const Dice = require('./dice')
const Scoreboard = require('./scoreboard')

let diceHolder = []
const scoreboard = new Scoreboard({
    name: null,
    points: 0,
    rounds: 0
})

// Vad felas i denna kod? 
function score(points) {
    scoreboard.points += points
    scoreboard.rounds++
        diceHolder = []
}

app.use(express.urlencoded({ extended: true }))

app.get('/reset', (req, res) => {

    // Nollställ dice och poäng
    diceHolder = []
    scoreboard.points = 0

    // Skriva in namnet i scoreboard
    scoreboard.name = req.body.name

    // Skapa fem tärningar
    for (let i = 0; i < 5; i++) {
        diceHolder.push(newDice())
    }

    res.send("Hej " + req.body.name)
})


app.get('/roll', (req, res) => {

    // Rulla alla 
    diceHolder.forEach((dice) => {
        dice.roll()
    })
    highScore()
    straight()
    odd()

    if (scoreboard.rounds == 2) {
        console.log("Slut")
        res.send("slut")
    } else {
        res.json({ scoreboard, diceHolder })
    }

})

// Rulla en tärning
app.post('/roll/:id', (req, res) => {
    // Översätt 1-5 till 0-4 för att få nollindex
    let index = req.params.id - 1

    diceHolder[index].roll()

    // Kontrollera ev poäng
    highScore()
    straight()
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
        score(2)
    }

}

function straight() {
    // Sortera tärningarna efter value
    diceHolder.sort((a, b) => {
        if (a.value > b.value)
            return 1
        else
            return -1
    })

    // Jämföra tärningarna med ett mönster
    let temp = diceHolder.map((dice) => {
        return dice.value
    })
    const small = [1, 2, 3, 4, 5]
    const large = [2, 3, 4, 5, 6]

    // Matcha arrayer mot varandra
    if (temp == small || temp == large)
        score(3)
}


// Funkar inte just nu - behöver tänka i lugn och ro
function odd() {
    const temp = [1, 1, 3, 3, 3]
    controlledDices = temp.map((dice) => {
        if (dice.value % 2 == 0)
            return dice
    })
    if (controlledDices.length == 0) {
        console.log("Odd")
        score(1)
    }
}



function newDice() {
    // Skapa en tärning med 0-värde
    let dice = new Dice({
            value: 0,
            locked: false,
            numberOfRolls: 0
        })
        // Utnyttja den inbyggda roll-funktionen
    dice.roll()
    return dice
}


app.listen(3000, () => {
    console.log('Webbserver aktiv.')
})