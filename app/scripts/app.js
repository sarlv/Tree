requirejs.config({

    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        angular: '../../bower_components/angular/angular'
    },

    shim: {
        angular: {
            exports: 'angular'
        }
    },

    deps: []
});


requirejs(['factories/treeFactory', 'controllers/treeCtr', 'directives/treeDirect'], function(treeFactory, treeCtr, treeDirect) {

    var tree = angular.module('tree', []);

    tree.factory('TreeFactory', treeFactory);

    tree.directive('addItem', treeDirect.addItem);

    tree.directive('removeItem', treeDirect.removeItem);

    tree.directive('saveText', treeDirect.saveText);

    tree.controller('TreeController', treeCtr);

})
