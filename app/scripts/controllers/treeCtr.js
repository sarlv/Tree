define(['angular'], function(angular) {
    return function($scope, TreeFactory) {

        $scope.sourceItems = TreeFactory.getData();

        $scope.update = function() {
            localStorage.setItem('data', JSON.stringify($scope.sourceItems));
        }

    };

});
