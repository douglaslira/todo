'use strict';

angular.module('translate', [])
    .factory('labelsForViewFactory', function() {
        var labels = {
            'ADD'               : 'Add',
            'ARCHIVE'           : 'Archive',
            'CLEAR_COMPLETED'   : 'Clear completed'
        };
        return {
            getLabel: function(label) {
                return labels[label];
            }
        };
    })
    .filter('soGoToLang', ['labelsForViewFactory', function(labelsForViewFactory) {
        return function(label) {
            return labelsForViewFactory.getLabel(label);
        };
    }]);