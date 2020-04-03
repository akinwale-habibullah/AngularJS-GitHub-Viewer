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
    .controller('MainController', function($scope, $http, $log) {
        $scope.username = 'robconery';
        $scope.repoSortOrder = '-stargazers_count';

        $scope.sortColumn = function(column, order='+'){
            $scope.repoSortOrder = order + column;
            $log.info('Finished running sortColumn method');
        };
        
        const onReposComplete = function(response) {
            $scope.repos = response.data; 
        };
        const onUserComplete = (response) => {
            $scope.user = response.data;

            $http.get($scope.user.repos_url)
                .then(onReposComplete, onError);
        };
        const onError = function(error) {
            $scope.error = 'Could not fetch the resource';
        };

        $scope.search = function(username){
            github_users_url = 'https://api.github.com/users/' + username;

            $http.get(github_users_url)
                .then(onUserComplete, onError);
        };

    });
