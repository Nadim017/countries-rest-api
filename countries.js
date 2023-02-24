function loadCountries() {
  fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => displayData(data));
}
const displayData = (countries) => {
  const container = document.getElementById('countries_container');

  for (const country of countries) {
    const div = document.createElement('div');
    div.classList.add('div_container');
    div.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <h3>Capital: ${country.capital}</h3>
    <img src="${country.flags.png}" alt="" />
    <h4>Population : ${country.population}</h4>
    <button onclick="loadCountry('${country.cca2}')">Details</button>
    `;
    container.appendChild(div);
  }
};
const loadCountry = (code) => {
  fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then((res) => res.json())
    .then((data) => displayOneCountry(data[0]));
};
const displayOneCountry = (data) => {
  const container = document.getElementById('diplayOne');
  container.classList.add('div_container');
  container.innerHTML = ` 
  <h3>name : ${data.name.common}</h3>
  <h3>Capital: ${data.capital}</h3>
  <img src="${data.flags.png}" alt="" />
 
  `;
};

loadCountries();
