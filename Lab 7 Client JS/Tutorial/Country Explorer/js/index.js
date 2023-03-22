// Links to the elements you want to interact with
const regionDL = document.querySelector("#region")
const countryDD = document.querySelector("#country")
const factsArea = document.querySelector("#facts-area")

// URLS

const regionURL = 'https://restcountries.com/v3.1/region/'
const countryURL = 'https://restcountries.com/v3.1/name/'

async function handleRegionChange() {
    const url = `${regionURL}${regionDL.value}`
    const data = await fetch(url)
    const countries = await data.json()
    const options = countries.map(country => `
        <option value="${country.name.common}">
        ${country.name.common}</option>
    `).join(' ')

    countryDD.innerHTML = options
}

async function handleCountryChange() {
    const url = `${countryURL}${countryDD.value}`
    const data = await fetch(url)
    const countries = await data.json()

    const facts = changeCountryToFacts(countries[0])
    factsArea.innerHTML = facts
}

function changeCountryToFacts(country) {
    return `
        <h2>Facts About ${country.name.common}</h2>
        <img src="${country.flags.png}" alt="${country.flags.alt}">
        <br>    
        
    `
}