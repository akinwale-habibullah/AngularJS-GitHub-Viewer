// (function(){
//     var github = function($http) {
//         var getUser = function(username){
//             github_users_url = 'https://api.github.com/users/' + username;

//             return $http.get(github_users_url)
//                 .then(function(response) {
//                     return response.data;
//                 }, function(error){
//                     return 'An error occured while fetching resource'
//                 });  
//         };

//         var getRepos = function(userObj){
//             return $http.get(userObj.repos_url)
//                 .then(function(response) {
//                     return response.data;
//                 }, function(error){
//                     return 'An error occured while fetching resource'
//                 });  
//         };

//         return {
//             'getUser': getUser,
//             'getRepos': getRepos
//         };
//     };

//     var module = angular.module('app');
//     module.factory('github', github);
// }()); 

// OR

angular.module('app').factory('github', function($http) {
    var getUser = function(username){
        github_users_url = 'https://api.github.com/users/' + username;

        return $http.get(github_users_url)
            .then(function(response) {
                return response.data;
            }, function(error){
                return 'An error occured while fetching resource'
            });  
    };

    var getRepos = function(userObj){
        return $http.get(userObj.repos_url)
            .then(function(response) {
                return response.data;
            }, function(error){
                return 'An error occured while fetching resource'
            });  
    };

    return {
        'getUser': getUser,
        'getRepos': getRepos
    };
});