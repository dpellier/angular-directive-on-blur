'use strict';

angular.module('onBlur', []);

angular.module('onBlur').directive('onBlur', function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.bind('blur', function() {
                scope.onBlur();
            });
        }
    };
});