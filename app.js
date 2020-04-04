angular.module('app', ["ngRoute"]).config(function($routeProvider) {
    $routeProvider
        .when("/main", {
            templateUrl: "search.html",
            controller: "MainController"
        })
        .when("/user/:username", {
            templateUrl: "userDetails.html",
            controller: "UserController",
        })
        .when("/user/:username/repo/:reponame", {
            templateUrl: "repoDetails.html",
            controller: "RepoController",
        })
        .otherwise({redirectTo: "/main"});
});