class PokemonModel {
    constructor() {
        this.pokemonName = "";
        this.pokemonImage = "";
    }

    setPokemonName(name) {
        this.pokemonName = name; 
    }

    setPokemonImage(imageStr) {
        this.pokemonImage = imageStr;
    }
}

module.exports = PokemonModel;
