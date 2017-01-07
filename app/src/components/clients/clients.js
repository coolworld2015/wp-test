import '../../../css/clients.css';

module.exports = {
	templateUrl: require('./clients.html'),
	bindings: {clients: '<'}, 
	controllerAs: 'vm', 
	controller: Ctrl
}

let app = () => {
	vm = this;
	vm.name = 'Ed';
	console.log(this);
};

class ClientsCtrl {
	constructor() {
		var vm = this;
		alert();
		console.log(this);
		this.name = 'Ed';
	}
}

function Ctrl() {
	let vm = this;
	vm.name = 'Clients';
	//console.log(vm);
}