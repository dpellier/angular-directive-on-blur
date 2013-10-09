Description
===========
The directive allow you to define a custom function that will be called each time a blur event is emitted from a given tag.

Installation
============
You can add this directive as a dependency with bower :
```
"on-blur": "git://github.com/dpellier/angular-directive-on-blur"
```

Or you can just add directly the script in your application.


Usage
=====

In your html, just add the directive on the tag you need to manage the blur event :
```
<input type="text" on-blur />
```

In your controller, add a 'onBlur' function.
This function will be called by the directive each time a blur event is emitted.
```
angular.module('myModule').controller(function($scope) {
  $scope.onBlur = function() {
    ....
  };
});
```
