import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './index.html';
import './css/index.css';
import routesConfig from './src/app/routes'

import HeaderComponent from './src/components/header/header';
import ClientsComponent from './src/components/clients/clients';
import GoodsComponent from './src/components/goods/goods';
import PokemonsComponent from './src/components/pokemons/pokemons';

import PokemonsService from './src/services/pokemonsService'
 
angular
	.module('app', [uiRouter])
	.component('headerComponent', HeaderComponent)
	.component('clientsComponent', ClientsComponent)
	.component('goodsComponent', GoodsComponent)
	.component('pokemonsComponent', PokemonsComponent)
	.service('PokemonsService', PokemonsService)
	.config(routesConfig);