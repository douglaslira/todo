'use strict';

angular.module('ToDoApp')
    .directive('alertMsg', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: { msgSettings: '=settings'},
            templateUrl: 'views/alertMsg.html',
            link: function(scope, iElem, iAttrs) {
                scope.dismiss = function() {
                    scope.msgSettings = {title: '', message: ''};
                };
            }
        }
    });