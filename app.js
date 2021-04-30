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

getPuzzle((error, puzzle) => {
    if(error) {
        console.log(`Error: ${error}`)
    }else{
        console.log(puzzle)
    }
})


//Making a HTTP request for random phrases 




// const countryCode = "US"

// const country = new XMLHttpRequest()

// country.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200){
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } 
// })
// country.open('GET', 'http://restcountries.eu/rest/v2/all')
// country.send()
