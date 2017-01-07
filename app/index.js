import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './index.html';
import './css/index.css';

import HeaderComponent from './src/components/header/header';
import ClientsComponent from './src/components/clients/clients';
import GoodsComponent from './src/components/goods/goods';

import routesConfig from './src/app/routes'
 
angular
	.module('app', [uiRouter])
	.component('headerComponent', HeaderComponent)
	.component('clientsComponent', ClientsComponent)
	.component('goodsComponent', GoodsComponent)
	.config(routesConfig);