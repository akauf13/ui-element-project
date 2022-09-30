const url = "https://breakingbadapi.com/api/characters";

const container = document.querySelector(".container");

function displayUI(arr) {
  // let newArr = arr.filter(pick => pick.name !== "Lydia Rodarte-Quayle")
  // console.log(newArr);
  // let newChar = arr.filter((char) => char.name === "Lydia Rodarte-Quayle");
  // console.log(newChar[0]);

  // let saulChars = arr.filter(chars => chars.char_id === 112 || chars.char_id === 113 || chars.char_id === 114 || chars.char_id === 115 || chars.char_id === 116)
  // let saulChars = arr.filter(chars => chars.char_id >= 112)
  // console.log(saulChars);
  arr.splice(57);
  console.log(arr);

  arr.forEach((person) => {
    let occupations = person.occupation.map((occ) => `<p>${occ}</p>`).join(" ");

    if (person.name === "Lydia Rodarte-Quayle") {
      person.img =
        "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/03/1484912975-laurafraser.JPG?crop=0.739xw:1.00xh;0.190xw,0&resize=480:*";
    }

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

let rightButton = document.querySelector(".right");

rightButton.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault();
  container.scrollBy({
    left: 700,
    behavior: "smooth",
  });
}
let leftButton = document.querySelector(".left");

leftButton.addEventListener("click", handleClick2);

function handleClick2(e) {
  e.preventDefault();
  container.scrollBy({
    left: -700,
    behavior: "smooth",
  });
}

async function fetchCharacters() {
  let response = await axios(url);
  // console.log(response.data);
  displayUI(response.data);
}
fetchCharacters();
