(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // PokemonClient.js
  var require_PokemonClient = __commonJS({
    "PokemonClient.js"(exports, module) {
      var PokemonClient2 = class {
        fetchPokemon(url, callback) {
          return fetch(url).then((res) => {
            return res.json();
          }).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = PokemonClient2;
    }
  });

  // PokemonView.js
  var require_PokemonView = __commonJS({
    "PokemonView.js"(exports, module) {
      var PokemonView2 = class {
        constructor(model2, client2) {
          this.model = model2;
          this.client = client2;
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
          });
        }
      };
      module.exports = PokemonView2;
    }
  });

  // PokemonModel.js
  var require_PokemonModel = __commonJS({
    "PokemonModel.js"(exports, module) {
      var PokemonModel2 = class {
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
      };
      module.exports = PokemonModel2;
    }
  });

  // index.js
  var PokemonClient = require_PokemonClient();
  var PokemonView = require_PokemonView();
  var PokemonModel = require_PokemonModel();
  var client = new PokemonClient();
  var model = new PokemonModel();
  var view = new PokemonView(model, client);
  view.displayPokemonData();
})();
