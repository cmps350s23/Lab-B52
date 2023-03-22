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

// handleCountryChange
