let routesConfig = ($stateProvider, $urlRouterProvider) => {
	
	let resolveHerokuClients = ($http, $q) => {
		let url = 'http://ui-warehouse.herokuapp.com/api/clients/get';
		return $http.get(url)
			.then((result) => {
				return result.data;
			})
			.catch((reject) => {
				return $q.reject(reject);
			});
	}			
	
	let resolveHerokuGoods = ($http, $q) => {
		let url = 'http://ui-warehouse.herokuapp.com/api/goods/get';
		return $http.get(url)
			.then((result) => {
				return result.data;
			})
			.catch((reject) => {
				return $q.reject(reject);
			});
	}

	$urlRouterProvider.otherwise('/home');	
	
	$stateProvider
		.state('home', {
			url: '/home',
			template: '<header-component title="Home"></header-component>'
		 })	
		 
		.state('clients', {
			url: '/clients',
			template: '<header-component title="Clients"></header-component>' + 
					  '<clients-component clients="$resolve.clients"></clients-component>',
			resolve: {
				clients: resolveHerokuClients
			}
		 })		 	
		 
		.state('goods', {
			url: '/goods',
			template: '<header-component title="Goods"></header-component>' + 
					  '<goods-component goods="$resolve.goods"></goods-component>',
			resolve: {
				goods: resolveHerokuGoods
			}
		 })						 
}

export default routesConfig;
 