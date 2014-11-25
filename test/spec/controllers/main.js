'use strict';

describe('Controller: TreeCtrl', function() {

    // load the controller's module
    beforeEach(module('tree'));

    var ctr;

    beforeEach(inject(function($controller, $rootScope) {
        ctr = $controller
    }));

    it('should attach a list of awesomeThings to the scope', function() {
        expect(ctr).toBe(true);
    });
});
