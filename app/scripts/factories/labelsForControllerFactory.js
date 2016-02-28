'use strict';

angular.module('ToDoApp')
    .factory('labelsForControllersFactory', function() {
        var labels = {
            'ALERT_GREET'   : 'Hi there =D',
            'TASK_DELETED'  : 'Task deleted.',
            'TASK_NEEDED'   : 'You need inform a task description.'
        };

        return {
            getLabel: function(label) {
                return labels[label];
            }
        };
    });