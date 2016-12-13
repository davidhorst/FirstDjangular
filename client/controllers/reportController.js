app.controller('reportController', ['$scope', '$location', '$auth', 'usersFactory', '$localStorage', 'jwtHelper', function($scope, $location, $auth, usersFactory, $localStorage, jwtHelper) {

    $scope.reg_errors = {};
    $scope.animals = {};
    $scope.username;
    //usersFactory.verifyToken()
    // console.log('username', $localStorage.currentUser.username);
    if($localStorage.currentUser){
        $scope.username = $localStorage.currentUser.username
        $scope.tokenDate = jwtHelper.getTokenExpirationDate($localStorage.currentUser.token)
    } else {
        $scope.username = "none";
    }

    $scope.add = function(){
      usersFactory.add(
      ).then(function(returned_data){
        // console.log("returned")
        // console.log(returned_data)
      });
    }

    $scope.show = function(){
      usersFactory.show(
      ).then(function(returned_data){
        // console.log(returned_data.data);
        $scope.animals = returned_data.data;
      });
    }

    $scope.logout = function(){

      usersFactory.logout()
      $location.path("/");
    }
}]);
