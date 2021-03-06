angular.module('app')
    .controller('UserController', function($scope, $log, $routeParams, github, $location) {
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
        const redirectToRepo = function(username, reponame) {
            $log.info('Redirect repo details', username, reponame)
            $location.path("/user/" + username + "/repo/" + reponame);
        }

        $scope.error = false;
        $scope.username = $routeParams.username;
        $scope.redirectToRepo = redirectToRepo;
        $scope.repoSortOrder = '-stargazers_count';
            github.getUser($scope.username)
                    .then(onUserComplete, onError);
    });
