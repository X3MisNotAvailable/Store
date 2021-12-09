/*var app = angular.module('main', ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider.when ('/',{
        templateUrl : '/app/home-page/home-page.component.html',
        controller : 'homeCtrl'
    }).when('/login-page',{
        templateUrl : '/app/login-page/login-page.component.html',
        controller:'loginCtrl'
    }).otherwise({
        template: '404',
         
    })
});

app.controller('homeCtrl', function($scope){
    $scope.goToLogin = function(){
        $location.path('/app/login-page');
    }
    $scope.register = function(){
        $location.path('/app/register-page');
    }
    
});
login.controller('loginCtrl', function($scope){
    $scope.login = function(){
        var username = $scope.username;
        var password = $scope.password;
    }
});*/
