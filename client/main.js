'use strict';

'use strict';
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        angular.module('mission2020App', [
    'ngRoute'
    ]).config(['$routeProvider', '$httpProvider', '$locationProvider', function ($routeProvider, $httpProvider, $locationProvider) {

            $routeProvider.when('/', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl',
                access: {
                    restricted: false
                }
            }).otherwise({
                redirectTo: '/',
                access: {
                    restricted: false
                }
            });

            $locationProvider.html5Mode({
                enabled: true
            });
    }]);
} else {
    angular.module('mission2020App', [
        'angular-parallax',
    'ngRoute'
    ]).config(['$routeProvider', '$httpProvider', '$locationProvider', function ($routeProvider, $httpProvider, $locationProvider) {

            $routeProvider.when('/', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl',
                access: {
                    restricted: false
                }
            }).otherwise({
                redirectTo: '/',
                access: {
                    restricted: false
                }
            });

            $locationProvider.html5Mode({
                enabled: true
            });
    }]);
}
