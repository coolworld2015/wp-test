import '../../../css/goods.css';

module.exports = {
	templateUrl: require('./goods.html'),
	bindings: {goods: '<'}, 
	controllerAs: 'vm', 
	controller: app
}

let app = () => {vm: this};