let url = "https://pokeapi.co/api/v2";

const urlImg =  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const getPokemon = async () => {
  try {
    const res = await fetch(`${url}/pokemon`);
    const data = await res.json();
    data.results.forEach( async (pokemon, index) => {
      const card = document.createElement("div");
      const cardName = document.createElement("div");
      const name = document.createElement("p");
      const icon = document.createElement("i");
      const imgPoke = document.createElement("img");
      const powerLevel = document.createElement("div");
      const namePower = document.createElement("p");
      const btnBuy = document.createElement("button");

      const resPokemon = await fetch (pokemon.url);
      const dataPokemon = await resPokemon.json();

      imgPoke.src = dataPokemon.sprites.other["official-artwork"].front_default;
      name.textContent = dataPokemon.name;
      namePower.textContent = dataPokemon.base_experience;
      btnBuy.textContent = "Buy";
     /*  cardImg.src = `${urlImg}${index + 1}.png`; */

      card.classList.add("card");
      cardName.classList.add("name");
      icon.className = "fa-sharp fa-regular fa-heart fa-beat";
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
    });
  } catch (error) {
    console.log(error);
  }
};

getPokemon();