var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/personal", {
        templateUrl: "views/personal-details.html"
    })
    .when("/academic", {
        templateUrl: "views/academic-details.html"
    })
    .when("/projects", {
        templateUrl: "views/project-details.html"
    })
    .when("/login", {
        templateUrl: "views/login.html"
    })
    .when("/signup", {
        templateUrl: "views/signup.html"
    })
    .otherwise({
        redirectTo: '/personal'
    });
});
