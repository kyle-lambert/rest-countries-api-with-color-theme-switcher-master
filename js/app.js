const darkModeToggle = document.querySelector('.color-toggle');
const searchField = document.querySelector('.form__input');
const regionSelect = document.querySelector('.form__select');
const countriesContainer = document.querySelector('.country');

class Search {
  async getCountries() {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await response.json();
    return data;
  }
}

class UI {
  renderCountry(country) {
    const html =
      `<div class="card">
        <a href="#${country.alpha3Code}" class="card__link">
          <img src="${country.flag}" alt="Country flag" class="card__img">
          <div class="card__body">
            <h1 class="card__header">${country.name}</h1>
            <p class="card__info">Population: <span class="card__span">${country.population}</span></p>
            <p class="card__info">Region: <span class="card__span">${country.region}</span></p>
            <p class="card__info">Capital: <span class="card__span">${country.capital}</span></p>
          </div>
        </a>
      </div>
      `
    countriesContainer.insertAdjacentHTML('beforeend', html);
  }

  clearContainer() {
    countriesContainer.innerHTML = '';
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const search = new Search();
  const ui = new UI();

  const allCountries = await search.getCountries();

  allCountries.forEach(country => {
    ui.renderCountry(country);
  })

  searchField.addEventListener('keyup', () => {
    if (searchField.value) {
      ui.clearContainer();

      const searchedCountries = allCountries.filter(country => {
        return country.name.toLowerCase().includes(searchField.value.toLowerCase());
      })

      if (searchedCountries.length > 0) {
        searchedCountries.forEach(country => {
          ui.renderCountry(country);
        })
      }
    }
  })

  regionSelect.addEventListener('change', (e) => {
    const region = e.target.value;
    ui.clearContainer();

    if (region !== '---') {
      const searchedRegion = allCountries.filter(country => {
        return country.region.toLowerCase() == region.toLowerCase();
      })
      searchedRegion.forEach(country => {
        ui.renderCountry(country);
      })

    } else {
      allCountries.forEach(country => {
        ui.renderCountry(country);
      })
    }
  })
});