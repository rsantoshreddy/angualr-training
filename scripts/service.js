var app = angular.module("demoapp", []);

app.controller("firstCtrl", firstCtrl);

app.service("serviceData", function() {
    this.message = "message from service";
});

app.service("factoryData", function() {
    var data = {};
    message = "message from factory";
    data.message = message;
    return data;
});

app.provider("providerData", function() {

    return {
        $get: function() {
            return {
                message: "message from provider"
            }
        }
    }
});

function firstCtrl($scope, serviceData, factoryData, providerData) {
    $scope.messages = [serviceData.message, factoryData.message, providerData.message];

}
