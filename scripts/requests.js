const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('unable to fetch puzzle')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if(response.status === 200) {
        const data = await response.json()
        return country = data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to get data')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=30666f32706f59')
    if(response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Can not find location')
    }
}


