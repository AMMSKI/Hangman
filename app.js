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

getPuzzle('2').then((puzzle) =>{
    console.log(puzzle)
}).catch((error) => {
    console.log(`Error: ${error}`)
})


getCountry('US').then((country) => {
    console.log(`Country name: ${country.name}`)
}).catch((error) => {
    console.log(`Error: ${error}`)
})



