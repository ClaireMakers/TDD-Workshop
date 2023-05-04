const PokemonView = require("./PokemonView");
const PokemonClient = require("./PokemonClient");
require("jest-fetch-mock").enableMocks();

describe("PokemonView", () => {
    it("loads the data from the client when called, and sets the fields in the model to the correct value", () => {
        const doublePokemonModel = {
          setPokemonName: (name) => { doublePokemonModel.name = name},
          setPokemonImage: (imageStr) => { doublePokemonModel.image = imageStr}
        };

        const pokemonClient = new PokemonClient();

        fetch.mockResponseOnce(
          JSON.stringify({
            name: "pokemon",
            sprites: {
              front_shiny: "imgSrc"
            },
          })
        );

        const pokemonView = new PokemonView(doublePokemonModel, pokemonClient);
        pokemonView.loadPokemonData().then(() => {
            expect(doublePokemonModel.image).toEqual("imgSrc");
            expect(doublePokemonModel.name).toEqual("pokemon");
        })
    })
})

