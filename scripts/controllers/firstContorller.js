function firstCtrl($scope) {
    $scope.message = "hellow angular!";
}

var app = angular.module("app");
// console.log(app);
app.controller("firstCtrl", firstCtrl);
