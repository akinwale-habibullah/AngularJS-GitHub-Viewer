angular.module('app')
    .controller('MainController', function($scope, $log, $interval, $location, github) {
        var timer = null; // store

        const decrementCountdown = function(){
            $scope.countdown -= 1;

            if($scope.countdown < 1){
                $scope.search($scope.username);
            }
        };
        $scope.search = function(username){
            $interval.cancel(timer);
          
            $location.path("/user/" + username);
        };
        var startCountdown = function(){
            timer = $interval(decrementCountdown, 1000, $scope.countdown, true, $scope.username);
        };

        $scope.username = 'robconery';
        $scope.countdown = 5;
        startCountdown(); // start timer
    });
