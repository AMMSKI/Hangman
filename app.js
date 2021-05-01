// HTTP (Hypertext Transfer protocol)
// Request -- What does the person making the request want to do
// Response -- What was accutally done

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('dog bob', 3)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage
console.log(game1.status)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
    console.log(game1.status)
})

getPuzzle("2", (error, puzzle) => {
    if(error) {
        console.log(`Error: ${error}`)
    }else{
        console.log(puzzle)
    }
})


getCountry('US', (error, country) => {
    if(error){
        console.log(error)
    } else {
    console.log(`Country name: ${country.name}`)
    }
})
