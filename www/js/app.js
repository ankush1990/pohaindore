// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var globalurl = "http://pohaindorinamkeen.com/webservice";
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCart'])



.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
	
  // Home screen
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

   // about screen
  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html'
  })
  // View category
  .state('category', {
    url: '/category/:category_id',
    templateUrl: 'templates/category.html',
    controller: 'CategoryCtrl'
  })

  // Product detail
  .state('detail', {
    url: '/detail/:product_id',
    templateUrl: 'templates/detail.html',
    controller: 'DetailCtrl'
  })

  // Cart detail
  .state('cart', {
    url: '/cart',
    templateUrl: 'templates/cart.html',
    controller: 'CartCtrl'
  })

  // Checkout steps
  // Address
  .state('checkout', {
    url: '/checkout',
    templateUrl: 'templates/checkout.html',
    controller: 'CheckoutCtrl'
  })
	
  // History
  .state('history', {
    url: '/history',
    templateUrl: 'templates/orderhistory.html',
    controller: 'HistoryCtrl'
  })
	
	// user screen
	.state('changepassword', {
		url: '/changepassword',
		templateUrl: 'templates/changepassword.html',
		controller: 'setting'
  	})
  
  	.state('setting', {
		url: '/setting',
		templateUrl: 'templates/setting.html',
		controller: 'setting'
  	})
	

   // login screen
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'AuthCtrl'
  })

  // register screen
  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'AuthCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
