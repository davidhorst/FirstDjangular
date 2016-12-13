var app = angular.module('app', ['ngRoute','ngCookies','satellizer', 'angular-jwt', 'ngStorage', 'ui.materialize']);

// app.filter('reverse', function() {
//   return function(items) {
//     return items.slice().reverse();
//   };
// });


app.config(['$httpProvider', '$routeProvider', '$authProvider', function ($httpProvider, $routeProvider, $authProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'client/partials/login.html',
        })
        .when('/login', {
            templateUrl: 'client/partials/login.html',
        })
        .when('/dashboard', {
            templateUrl: 'client/partials/dashboard.html',
        })
        .when('/reportAdmin', {
            templateUrl: 'client/partials/reportAdmin.html',
        })
        .otherwise({
          redirectTo: '/'
        });

    // $authProvider.google({
    //   clientId: '373420519079-h24np71la11of55ccqef6ne5q9hcvo9p.apps.googleusercontent.com'
    // });

    // $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    // $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken'
}]);

app.run(function($rootScope, $http, $cookies, $localStorage, $location){
    // set the CSRF token here
    // $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;

    // keep user logged in after page refresh
    if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'JWT ' + $localStorage.currentUser.token;
        }

    // redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var publicPages = ['/login'];
        var restrictedPage = publicPages.indexOf($location.path()) === -1;
        if (restrictedPage && !$localStorage.currentUser) {
            $location.path('/login');
        }
    });
});
