'use strict';

angular.module('ToDoApp')
    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    });