const url = "https://breakingbadapi.com/api/characters";

const container = document.querySelector(".container");

function displayUI(arr) {
  arr.forEach((person) => {
    let occupations = person.occupation.map((occ) => `<p>${occ}</p>`).join(" ");

    let htmlTemplate = `
    <div class="card">
      <h2>${person.name}</h2>
      <p>Nickname: ${person.nickname}</p>
      <h3>Occupations: </h3>
      ${occupations}
      <img src="${person.img}">
      <p>Portrayed by: ${person.portrayed}</p>
      </div>
      `;
    container.insertAdjacentHTML("beforeend", htmlTemplate);
  });
}

async function fetchCharacters() {
  let response = await axios(url);
  console.log(response.data);
  displayUI(response.data);
}
fetchCharacters();
