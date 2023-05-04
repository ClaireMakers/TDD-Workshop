const PokemonModel = require("./PokemonModel");

describe(PokemonModel, () => {
    it("sets the pokemon name to the right value when setPokemonName is called", () => {
        const pokemonModel = new PokemonModel();

        pokemonModel.setPokemonName("pikachu");
        expect(pokemonModel.pokemonName).toEqual("pikachu");
    })

    it("sets the pokemon image to the right value when setPokemonimage is called", () => {
      const pokemonModel = new PokemonModel();

      pokemonModel.setPokemonImage("stringImage");
      expect(pokemonModel.pokemonImage).toEqual("stringImage");
    });
})