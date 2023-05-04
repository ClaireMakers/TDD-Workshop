const PokemonClient = require("./PokemonClient");
const PokemonView = require("./PokemonView");
const PokemonModel = require("./PokemonModel");


const client = new PokemonClient();
const model = new PokemonModel();
const view = new PokemonView(model, client);

view.displayPokemonData();