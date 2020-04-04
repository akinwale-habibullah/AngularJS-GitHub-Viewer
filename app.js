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
        .otherwise({redirectTo: "/main"});
});