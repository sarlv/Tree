var tree = angular.module('tree', []);

tree.factory('TreeFactory', function() {

    var data = [{
        "text": "",
        "children": []
    }];


    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', JSON.stringify(data));
    }

    return {
        getData: function() {
            return JSON.parse(localStorage.getItem('data'));
        }
    }

});

tree.directive('addItem', function() {
    return function(scope, elem, attr) {
        
        elem.on('click', function() {
            scope.item.children.push({
                    "text":"",
                    "children":[]
                });

            scope.$apply(elem);
            scope.update();
        })
    }
});

tree.directive('removeItem', function() {
    return function(scope, elem, attr) {

        elem.on('click', function(e) {

            elem.parent('li').remove();

            scope.$parent.items.splice(scope.$index, 1);

            scope.$apply(elem);

            scope.update();
        });
    };
});

tree.directive('saveText', function() {
    return function(scope, elem, attr) {

        elem.on('blur', function(e) {
            scope.item.text = elem.val();
            
            scope.update();
        });
    };
});


tree.controller('TreeController', function($scope, TreeFactory) {

    $scope.sourceItems = TreeFactory.getData();

    $scope.update = function() {
        localStorage.setItem('data', JSON.stringify($scope.sourceItems));
    }

});
