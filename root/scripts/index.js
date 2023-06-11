let url = "https://pokeapi.co/api/v2";
let offset = 0;
let limit = 20;
let totalLoaded = 0;

const getPokemon = async () => {
  try {
    const res = await fetch(`${url}/pokemon?offset=${offset}&limit=${limit}`);
    const data = await res.json();

    data.results.forEach(async (pokemon, index) => {
      if (totalLoaded < offset + limit) {
        const card = document.createElement("div");
        const cardName = document.createElement("div");
        const name = document.createElement("p");
        const icon = document.createElement("i");
        const imgPoke = document.createElement("img");
        const powerLevel = document.createElement("div");
        const namePower = document.createElement("p");
        const btnBuy = document.createElement("button");

        const resPokemon = await fetch(pokemon.url);
        const dataPokemon = await resPokemon.json();

        const typesPokemon = dataPokemon.types.map((typeObj) => typeObj.type.name);

        const type1 = typesPokemon[0];
        const type2 = typesPokemon[1] || null;

        imgPoke.src = dataPokemon.sprites.other["home"].front_default;
        name.textContent = dataPokemon.name;
        namePower.textContent = dataPokemon.base_experience;
        btnBuy.textContent = "Buy";

        card.classList.add("card");
        cardName.classList.add("name");
        icon.className = "fa-sharp fa-regular fa-heart";
        imgPoke.classList.add("img");
        powerLevel.classList.add("power");
        btnBuy.classList.add("btnCard");

        card.appendChild(cardName);
        cardName.appendChild(name);
        cardName.appendChild(icon);
        card.appendChild(imgPoke);
        card.appendChild(powerLevel);
        powerLevel.appendChild(namePower);
        powerLevel.appendChild(btnBuy);

        document.querySelector(".grid-container").appendChild(card);

        card.setAttribute('dataType1', type1);
        card.setAttribute('dataType2', type2);

        totalLoaded++;

        const cardCountElement = document.querySelector(".cardsCount");
        cardCountElement.textContent = `${totalLoaded} Cards`;
      }
    });
    offset += limit;
  } catch (error) {
    console.log(error);
  }
};

getPokemon();

const btnMore = document.querySelector(".btnMore");
btnMore.addEventListener("click", getPokemon);


const typeLinks = document.querySelectorAll('.navType');

typeLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const type = link.textContent.toLowerCase();
    filterByType(type);
  });
});

const filterByType = (type) => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    const cardType1 = card.getAttribute('dataType1');
    const cardType2 = card.getAttribute('dataType2');
    
    if (type === 'all' || cardType1 === type || cardType2 === type) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
};

const btnDarkMode = document.querySelector(".btnDark");
const colorBack = document.body;

btnDarkMode.addEventListener("click", function () {
  colorBack.classList.toggle("darkMode");

  if (colorBack.classList.contains("darkMode")) {
    btnDarkMode.textContent = "Light Mode";
  } else {
    btnDarkMode.textContent = "Dark Mode";
  }
});
