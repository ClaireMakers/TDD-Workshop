const PokemonClient = require("./PokemonClient");

describe("PokemonClient", () => {
    it("fetchPokemon sends back a 200 status when an API call is made and the url is correct", () => {
        const pokemonClient = new PokemonClient();

        return pokemonClient.fetchPokemon("https://pokeapi.co/api/v2/pokemon/ditto", (data) => {
            expect(data).toBeTruthy();
        })
    })
})