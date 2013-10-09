'use strict';

describe('Directive: onBlur', function() {
    var scope, element, onBlurCalled;

    /**
     * Setup
     */

    beforeEach(module('onBlurDirective'));

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope;
        onBlurCalled = false;

        scope.onBlur = function() {
            onBlurCalled = true;
        };

        element = angular.element('<input type="text" on-blur />');
        $compile(element)(scope);
        scope.$digest();
    }));

    /**
     * Tests
     */

    it('should call the given function', function() {
        // given
        element = element[0];
        var event = window.document.createEvent('Events');
        event.initEvent('blur', true, false);

        // when
        scope.$apply();
        element.dispatchEvent(event);

        // then
        expect(onBlurCalled).toBeTruthy();
    });
});