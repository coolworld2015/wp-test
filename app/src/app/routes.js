function routesConfig($stateProvider, $urlRouterProvider) {

	resolveHerokuClients.$inject = ['$http', '$q'];
	
	function resolveHerokuClients($http, $q) {
		var url = 'http://ui-warehouse.herokuapp.com/api/clients/get';
		return $http.get(url)
			.then(function (result) {
				return result.data;
			})
			.catch(function (reject) {
				return $q.reject(reject);
			});
	}			
	
	function resolveHerokuGoods($http, $q) {
		var url = 'http://ui-warehouse.herokuapp.com/api/goods/get';
		return $http.get(url)
			.then(function (result) {
				return result.data;
			})
			.catch(function (reject) {
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
 