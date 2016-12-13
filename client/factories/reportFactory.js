app.factory('usersFactory', ['$http', '$cookies', '$location', '$routeParams', '$localStorage', 'jwtHelper', function($http, $cookies, $location, $routeParams, $localStorage, jwtHelper) {

    function usersFactory(){
        var self = this;

        this.add = function(testData) {
            // console.log("At usersFactory")
            return $http.get('/api/kittens')
            .then(function(returned_data){
              // console.log(returned_data);
              return returned_data
            })
        }

        this.show = function(){
          // console.log("User Factory preparing to get kittens");
          return $http.get('/api/kittens/')
          .then(function(returned_data){
            return returned_data;
          })
        }
        //
        // this.login = function(user){
        //   return $http.post('/api-token-auth/', user)
        //   .then(function(returned_data){
        //       return returned_data;
        //   })
        //   .catch(function() {
        //       throw new Error('server could not log you in')
        //   });
        // };

        this.login = function(userObj) {
            return $http.post('/api-token-auth/', userObj)
            .then(function (returned_data) {
                    // login successful if there's a token in the response
                    console.log(returned_data)
                    if (returned_data.data.token) {
                        // store username and token in local storage to keep user logged in between page refreshes
                        var user = jwtHelper.decodeToken(returned_data.data.token)
                        console.log(user);
                        $localStorage.currentUser = { username: user.username, token: returned_data.data.token };
                        console.log("newly saved current user:", $localStorage.currentUser);
                        // add jwt token to auth header for all requests made by the $http service
                        $http.defaults.headers.common.Authorization = 'JWT ' + returned_data.data.token;
                        return returned_data.data
                    } else {
                    // login unsuccessful
                    console.log("no token in response, uncaught error")
                    }

            })
            .catch(function(response){
                throw {success: false, error: "Inccorect Username or Password"}
            });
        }

        this.logout = function() {
            // remove user from local storage and clear http auth header
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
        }

        // this.verifyToken = function() {
        //     return $http.post('api-token-verify/', {"token" : $localStorage.currentUser.token})
        //     .then(function(returned_data) {
        //         console.log(returned_data)
        //         return returned_data;})
        //     .catch(function() {
        //         throw new Error('server could not log you in')
        //     });
        // };

        // this.login = function(loginData) {
        //     return $http.post('/users/login', loginData)
        //     .then(function(returned_data) {
        //         return returned_data.data;})
        //     .catch(function() {
        //         throw new Error('server could not log you in')
        //     });
        // };
        //
        // this.logout = function() {
        //      $cookies.remove('token');
        //      $cookies.remove('current_user')
        //      $location.path("/");
        // };
        //
        // this.register = function(regiserData) {
        //     return $http.post('/users', regiserData)
        //     .then(function(returned_data) {
        //         return returned_data.data })
        //     .catch(function(returned_data) {
        //         throw returned_data.data
        //     });
        // };
        //
        // this.isLoggedIn = function() {
        //     return !!self.getCurrentUser();
        // };
        //
        // this.getCurrentUser = function() {
        //     return $cookies.getObject('current_user');
        // }
        //
        // this.getCurrentGame = function(userId){
        //   return $http.get(`/user/game/${userId}`)
        //   .then(function(returned_data){
        //     return returned_data.data;
        //   })
        // };
        //
        // this.show = function() {
        //     return $http.get(`/users/${$routeParams.id}`)
        //     .then(function(returned_data) {
        //         console.log(returned_data);
        //         return returned_data.data;
        //     })
        //     .catch(function(returned_data) {
        //         throw returned_data.data;
        //     });
        // }
        // //
        // // this.setCurrentGame = function(gameObj){
        // //   return $http.get(`/users/addGame/${gameObj.userId}`)
        // // }
    };

    return new usersFactory();
}]);
