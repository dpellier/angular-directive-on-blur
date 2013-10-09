'use strict';

angular.module('onBlurDirective', []);

angular.module('onBlurDirective').directive('onBlur', function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.bind('blur', function() {
                scope.onBlur();
            });
        }
    };
});