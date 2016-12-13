app.controller('loginController', ['$scope', '$location', '$auth', 'usersFactory',  function($scope, $location, $auth, usersFactory) {

    $scope.reg_errors = {};
    $scope.user = {};
    $scope.openModal = true;


    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(response) {
          console.log('something went wrong')
        });
    };

    $scope.login = function() {
      usersFactory.login($scope.user)
      .then(function(data){
        $location.path("/dashboard");
        $scope.openModal = false;
      })
      .catch(function(data){
        console.log(data.error);
      })
    };

    // $scope.login = function() {
    //   usersFactory.login($scope.user, function(data){
    //     $location.path("/dashboard");
    //   })
    // };
}]);
