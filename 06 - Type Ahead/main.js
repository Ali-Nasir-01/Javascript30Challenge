const action =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
const formatter = new Intl.NumberFormat();

fetch(action)
  .then((response) => response.json())
  .then((data) => {
    cities.push(...data);
  });

function updateFilters() {
  const searchItems = document.querySelector(".search-item");
  if (this.value) {
    const regexPattern = new RegExp(this.value, "ig");
    let filterCities = cities.filter(
      (item) =>
        item.city.includes(this.value) || item.state.includes(this.value)
    );
    let liLists = "";
    for (const city of filterCities) {
      liLists += `<li>
        <span>
          ${city.city}, ${city.state}, ${formatter.format(city.population)}
        </span>
      </li>`;
    }
    liLists = liLists.replace(
      regexPattern,
      `<span class='highlight'>${this.value}</span>`
    );
    searchItems.innerHTML = liLists;
  } else {
    searchItems.innerHTML = `<li>Filter for a city</li>
                <li>or a state</li>`;
  }
}

document.getElementById("search-box").addEventListener("input", updateFilters);
