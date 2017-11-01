var app = angular.module("myApp", []);

app.controller("AppCtrl", function($scope, $http) {
    console.log("Hello from Controller");
    $scope.wirteFile = "";
    $scope.readFile = "";
    $scope.amount;
    $scope.percent;
    $scope.currency = "$";
    $scope.result = "";

    $scope.SaveText = function () {
        var _data = { text: $scope.wirteFile};
        $http.post('/savefile',_data).then(function(response) {
            console.log(response);
        }).catch(function(response) {
            console.error(response);
        })
    }

    $scope.FetchText = function () {
        $http.get('/readfile').then(function(response) {
            console.log(response);
            if(response !== undefined && response != null)
                $scope.readFile = response.data;
            else
                alert("File reading failed.");
        }).catch(function(response) {
                console.error(response);
            })
    }

    $scope.CalculateTax = function () {
        //alert($scope.amount + "- " + $scope.percent + "- " + $scope.currency);

        var _data = { amount: $scope.amount, percent: $scope.percent};
        $http.post('/calculatetax',_data).then(function(response) {
            console.log(response);
            $scope.result = $scope.currency  + " " + response.data;
        }).catch(function(response) {
                console.error(response);
            })
    }
});

