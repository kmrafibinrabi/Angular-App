var app = angular.module('myApp', []);
app.controller ('MyController', ['$scope', function($scope){
    $scope.form = {};
    $scope.addReview = function(){
        $scope.reviews.push($scope.form);
    }
    $scope.reviews = [
        {
            comment: 'could this be more awesome?',
            by : 'rafi@email.com'
        },
        {
            comment : 'How you doin?',
            by : 'redoy@gmail.com'
        }
    ];
}]);