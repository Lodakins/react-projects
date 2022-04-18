var myAppModule = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.tpls']);
myAppModule.config([
    '$routeProvider', function ($routeProvider) {
            $routeProvider
            .when('/', {templateUrl: 'scripts/app/views/default.html', controller: 'DefaultController'})
            .when('/home', {templateUrl: 'scripts/app/views/default.html', controller: 'DefaultController'})
            .when('/product', {templateUrl: 'scripts/app/views/product.html', controller: 'ProductController'})
            .when('/wholesale', {templateUrl: 'scripts/app/views/wholesale.html', controller: 'WholesaleController'})
            .when('/licensing', {templateUrl: 'scripts/app/views/licensing.html', controller: 'LicensingController'})
            .when('/artists/:artistName/:action', { templateUrl: 'scripts/app/views/artistDetails.html', controller: 'ArtistController' })
            .when('/artists/:artistName/:action/:notabs', { templateUrl: 'scripts/app/views/artistDetails.html', controller: 'ArtistController' })
            .when('/invest', { templateUrl: 'scripts/app/views/invest.html', controller: 'InvestController' })
            .when('/about', { templateUrl: 'scripts/app/views/about.html', controller: 'AboutController' })
    }
])


