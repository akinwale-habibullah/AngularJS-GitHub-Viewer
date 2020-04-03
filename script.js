// (function(){
//     const app =   angular.module('app', []);

//     app.controller('MainController', ['$scope', '$http', '$log', function($scope, $http, $log) {
//         github_users_url = 'https://api.github.com/users/robconery';
//         const onUserComplete = (response) => {
//             $scope.user = response.data;
//         };
//         const onError = function(error) {
//             $scope.error = 'Could not fetch the user';
//         }

//         $http.get(github_users_url)
//             .then(onUserComplete, onError);
//     }]);
// }());

// OR

angular.module('app', [])
    .controller('MainController', function($scope, $log, $interval, github) {
        var timer = null; // store

        $scope.sortColumn = function(column, order='+'){
            $scope.repoSortOrder = order + column;
        };
        const onReposComplete = function(response) {
            $scope.repos = response; 
        };
        const onUserComplete = (response) => {
            $scope.user = response;

            github.getRepos($scope.user)
                .then((onReposComplete), onError);
        };
        const onError = function(error) {
            $scope.error = 'Could not fetch the resource';
        };
        const decrementCountdown = function(){
            $scope.countdown -= 1;

            if($scope.countdown < 1){
                $scope.search($scope.username);
            }
        };
        $scope.search = function(username){
            $interval.cancel(timer);
          
            github.getUser(username)
                .then(onUserComplete, onError);
        };
        var startCountdown = function(){
            timer = $interval(decrementCountdown, 1000, $scope.countdown, true, $scope.username);
        };

        $scope.repoSortOrder = '-stargazers_count';
        $scope.username = 'robconery';
        $scope.countdown = 5;
        startCountdown(); // start timer
    });
