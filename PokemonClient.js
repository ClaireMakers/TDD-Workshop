class PokemonClient {
    fetchPokemon(url, callback) {
        return fetch(url)
            .then((res) => {
                return res.json();
            }).then((data) => {
                callback(data);
            })
    }
}

module.exports = PokemonClient;