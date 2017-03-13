var app = angular.module("demoapp", []);

app.controller("firstCtrl", first);
app.controller("secondCtrl", second);
app.controller("thirdCrtl", third);
app.controller("fourth", ["$scope", fourth]);

function fourth($scope) {
    $scope.name = "fourth";
}

function third($scope) {
    $scope.message = "hellow angular! from third Controller";
}

function second() {
    this.name = "angualr";
    this.age = 13;
    this.city = "bangalore";
}

function first($scope) {

    console.log("hi");

    $scope.message = "hellow angular!";

    $scope.getName = function(model) {
        return model.name;
    };

    this.logChange = function() {
        var d = $scope.persons[1].name;
        console.log(d);
    }

    $scope.persons = [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": "bangalore",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": "companyName"
    }, {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": "bangalore",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": "companyName"

    }];
}
