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


requirejs(['factories/TreeFactory', 'controllers/TreeCtr', 'directives/TreeDirect'], function(TreeFactory, treeCtr, TreeDirect) {

    var tree = angular.module('tree', []);

    tree.factory('TreeFactory', TreeFactory);

    tree.directive('addItem', TreeDirect.addItem);

    tree.directive('removeItem', TreeDirect.removeItem);

    tree.directive('saveText', TreeDirect.saveText);

    tree.controller('TreeController', treeCtr);

})
