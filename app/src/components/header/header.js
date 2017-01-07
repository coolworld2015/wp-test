module.exports = {
	template: '<div><hr>' +
					'<a ui-sref="home">Home</a>&nbsp' +
					'<a ui-sref="clients">Clients</a>&nbsp' + 
					'<a ui-sref="goods">Goods</a>' +
					'&nbsp&nbsp&nbsp&nbsp&nbsp <b>{{vm.title}}</b>' +
				  '<hr></div>',
	bindings: {title: '@'}, 
	controllerAs: 'vm',			
	controller: app
}

let app = () => {vm: this};