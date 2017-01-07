import '../../../css/clients.css';

module.exports = {
	templateUrl: require('./clients.html'),
	bindings: {clients: '<'}, 
	controllerAs: 'vm', 
	controller: app
}

let app = () => {vm: this};