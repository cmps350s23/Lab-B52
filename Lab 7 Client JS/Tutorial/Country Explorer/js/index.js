// Links to the elements you want to interact with
const regionDL = document.querySelector("#region")
const countryDD = document.querySelector("#country")
const factsArea = document.querySelector("#facts-area")

// URLS

const regionURL = 'https://restcountries.com/v3.1/region/'
const countryURL = 'https://restcountries.com/v3.1/name/'

function handleRegionChange() {
    console.log(regionDL.value)
}
