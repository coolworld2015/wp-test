class PokemonsService {
	constructor($http) {
		this.$http = $http
	}
	
	getPokemons() {
		let url = 'https://raw.githubusercontent.com/PokemonGOAPI/PokemonDataGraber/master/output.json';
		return this.$http.get(url)
	}
}

export default PokemonsService;
 