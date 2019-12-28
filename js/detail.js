// Get country details from storage
function getItem() {
  return JSON.parse(sessionStorage.getItem('country'))
}

function renderDetail(country) {
  const detailsContiner = document.querySelector('.detail');

  const html = `
    <img src="${country.flag}" alt="Country flag" class="detail__img">
    <div class="detail__body">
      <h1 class="detail__header">${country.name}</h1>

      <ul class="detail__list">
        <li class="detail__info">Native Name: <span class="detail__span">${country.nativeName}</span></li>
        <li class="detail__info">Population: <span class="detail__span">${country.population}</span></li>
        <li class="detail__info">Region: <span class="detail__span">${country.region}</span></li>
        <li class="detail__info">Sub Region: <span class="detail__span">${country.subregion}</span></li>
        <li class="detail__info">Capital: <span class="detail__span">${country.capital}</span></li>
      </ul>
      <ul class="detail__list">
        <li class="detail__info">Top Level Domain: <span class="detail__span">${country.topLevelDomain}</span></li>
        <li class="detail__info">Currencies: <span class="detail__span">fdsfsd</span></li>
        <li class="detail__info">Languages: <span class="detail__span">fdsfsd</span></li>
      </ul>
    <div/>
  `
  detailsContiner.insertAdjacentHTML('beforeend', html)
}

document.addEventListener('DOMContentLoaded', () => {
  const countryData = getItem();

  renderDetail(countryData[0]);
});