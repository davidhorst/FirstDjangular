var app = angular.module('app', ['ngRoute','ngCookies']);

// app.filter('reverse', function() {
//   return function(items) {
//     return items.slice().reverse();
//   };
// });


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'client/partials/login.html',
            controller: 'loginController',
        })
        // 
        // .otherwise({
        //   redirectTo: '/'
        // });
});
