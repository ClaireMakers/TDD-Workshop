class PokemonView {
    constructor(model, client) {
        this.model = model;
        this.client = client;
    }

    loadPokemonData() {
        return this.client.fetchPokemon(
          "https://pokeapi.co/api/v2/pokemon/ditto",
            (data) => {
                console.log(data);
                this.model.setPokemonName(data.name);
                this.model.setPokemonImage(data.sprites.front_shiny);
          }
        );
    }

    displayPokemonData() {
        this.loadPokemonData().then(() => {
            const pokedex = document.querySelector("#pokedex");
            let pokemonName = document.createElement("h2");
            let pokemonImg = document.createElement("img");

            pokedex.append(pokemonName);
            pokedex.append(pokemonImg);

            console.log(this.model);
            pokemonName.textContent = this.model.pokemonName;
            pokemonImg.src = this.model.pokemonImage;
        })
    }
}

module.exports = PokemonView;
