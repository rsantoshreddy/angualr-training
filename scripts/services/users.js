app.service("userData", function($http) {
    this.getUsers = function(url, successHandler, errorHandler) {
        $http.get(url).then(successHandler, errorHandler);
    }

    return {
        getUsers: this.getUsers
    }
});
