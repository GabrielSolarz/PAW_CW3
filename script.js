async function getCountryInfo() {
  const capital = document.getElementById("capital").value;
  const apiUrl = `https://restcountries.com/v3.1/capital/${capital}`;

  try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.length > 0) {
          const country = data[0];
          displayCountryInfo(country);
      } else {
          alert("No country found with that capital.");
          clearTable();
      }
  } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error fetching data. Please check the capital and try again.");
      clearTable();
  }
}

function displayCountryInfo(country) {
  const tableBody = document.querySelector("#countryTable tbody");
  tableBody.innerHTML = `
      <tr>
          <td>${country.name.common}</td>
          <td>${country.capital ? country.capital[0] : 'N/A'}</td>
          <td>${country.population}</td>
          <td>${country.region}</td>
          <td>${country.subregion ? country.subregion : 'N/A'}</td>
      </tr>
  `;
}

function clearTable() {
  const tableBody = document.querySelector("#countryTable tbody");
  tableBody.innerHTML = "";
}
//zadanie1