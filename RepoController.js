angular.module('app').controller('RepoController', function($scope, $routeParams, $log, github) {
    var onRepoDetails = function(response){
        $scope.repoDetails = response;

        github.getStargazers($scope.repoDetails)
            .then(onStargazers,onError);
    };
    var onStargazers = function(response){
        $log.info('Stargazers: ', response);
        $scope.stargazers = response;
    };
    var onError = function(error){
        $scope.error = 'Unable to fetch resource';
    };

    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame
    github.getRepoDetails($scope.username, $scope.reponame)
        .then(onRepoDetails, onError);

});