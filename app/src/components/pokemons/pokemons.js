module.exports = {
	templateUrl: require('./pokemons.html'),
	bindings: {clients: '<'}, 
	controllerAs: 'vm',			
	controller: Ctrl
}

function Ctrl(PokemonsService) {
	var vm = this;
	vm.name = 'Pokemons';
	PokemonsService.getPokemons()
		.then((results) => {
			vm.pokemons = results.data.sort(sort);
			console.log(vm.pokemons);
		})
	
}

function sort(a, b) {
	var nameA = a.Name, nameB = b.Name;
	if (nameA < nameB) {
		return -1
	}
	if (nameA > nameB) {
		return 1
	}
	return 0;
}