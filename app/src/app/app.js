import angular from 'angular';
import uiRouter from 'angular-ui-router';
import '../index.html';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
	  alert();
	  console.log('test wp1');
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}
 	angular
		.module('app', [uiRouter])
		.component('header', {
			template: '<div><hr>' +
						'<a style="color:blue" ui-sref="home">Home</a>&nbsp' +
						'<a style="color:blue" ui-sref="clients">Clients</a>&nbsp' + 
						'<a style="color:blue" ui-sref="goods">Goods</a>' +
						'&nbsp&nbsp&nbsp&nbsp&nbsp <b>{{vm.title}}</b>' +
					  '<hr></div>',

			bindings: {title: '@'}, 
			controllerAs: 'vm',
			controller: controller1
		})
		.component('clientsComponent', {
			template: '<div ng-repeat="client in vm.clients">{{client.name}}</div>',
			bindings: {clients: '<'}, 
			controllerAs: 'vm',
			controller: controller2
		})
		.component('goodsComponent', {
			template: '<div ng-repeat="good in vm.goods">{{good.name}}</div>',
			bindings: {goods: '<'}, 
			controllerAs: 'vm',
			controller: controller3
		})
		.config(routeConfig);
		
		function controller1() {
			var vm = this;
		}
		function controller2() {
			var vm = this;
		}
		function controller3() {
			var vm = this;
		}		
		
const MODULE_NAME = 'app';

function routeConfig($stateProvider, $urlRouterProvider) {

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
				template: '<header title="Home"></header>'
			 })	
			 
			.state('clients', {
				url: '/clients',
				template: '<header title="Clients"></header>' + 
						  '<clients-component clients="$resolve.clients"></clients-component>',
				resolve: {
					clients: resolveHerokuClients
				}
			 })		 	
			 
			.state('goods', {
				url: '/goods',
				template: '<header title="Goods"></header>' + 
						  '<goods-component goods="$resolve.goods"></goods-component>',
				resolve: {
					goods: resolveHerokuGoods
				}
			 })						 
 }
		 
//angular.module(MODULE_NAME, [])
//  .directive('app', app)
//  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;