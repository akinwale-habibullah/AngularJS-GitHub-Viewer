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
        github_users_url = 'https://ap.github.com/users/robconery';
        const onUserComplete = (response) => {
            $log.info(response);
            $scope.user = response.data;
        };
        const onError = function(error) {
            $log.error(error);
            $scope.error = 'Could not fetch the user';
        }

        $http.get(github_users_url)
            .then(onUserComplete, onError);
    });
