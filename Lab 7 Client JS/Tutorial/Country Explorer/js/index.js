// // Links to the elements you want to interact with
const regionDL = document.querySelector("#region")
const countryDD = document.querySelector("#country")
const factsArea = document.querySelector("#facts-area")

// // URLS

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
    handleCountryChange()
}

async function handleCountryChange() {
    const url = `${countryURL}${countryDD.value}`
    const data = await fetch(url)
    const countries = await data.json()

    const facts = changeCountryToFacts(countries[0])
    factsArea.innerHTML = facts
}

function changeCountryToFacts(country) {
    const currKey = Object.keys(country.currencies)[0]
    const currency = country.currencies[currKey].name

    const langKeys = Object.keys(country.languages)
    const languages = langKeys
        .map(key => country.languages[key]).join(' - ')

    // 
    return `
        <h2>Facts About ${country.name.common}</h2>
        <img src="${country.flags.png}" alt="${country.flags.alt}">
        <br>   
        <table>
            <tr>
                <th>Official Name</th>
                <td>${country.name.official}</td>
            </tr>
            <tr>
                <th>Capital</th>
                <td>${country.capital}</td>
            </tr>
            <tr>
                <th>Currencies</th>
                <td>${currency}</td>
            </tr>
            <tr>
                <th>Population</th>
                <td>${country.population}</td>
            </tr>
            <tr>
                <th>Languages</th>
                <td>${languages}</td>
            </tr>

        </table>


    `
}
// const person = {
//     name: 'Ali',
//     age: 90
// }

// const keys = Object.keys(person)
// console.log(Object.values(person));
// console.log(Object.key(person));
// console.log(person[keys[0]]);