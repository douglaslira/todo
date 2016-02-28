'use strict';

angular.module('ToDoApp')
    .controller('ToDoListController', ['$scope', 'labelsForControllersFactory', function ($scope, labelsForControllersFactory) {

        var getCurrentTaskObject = function() {
            return {
                description: '',
                done: false,
                editing: false
            };
        };

        $scope.initToDoListController = function() {
            $scope.todoViewControl = {
                tasks: angular.fromJson(localStorage.getItem('tasks')) || [],
                messageControl: { title: '', message: ''},
                currTask: getCurrentTaskObject()
            };
        };

        $scope.add = function(task) {
            if(!task.description.length) {
                $scope.todoViewControl.messageControl = {
                    title: labelsForControllersFactory.getLabel('ALERT_GREET'),
                    message: labelsForControllersFactory.getLabel('TASK_NEEDED')
                };
                return;
            }
            $scope.todoViewControl.tasks.push(task);
            $scope.todoViewControl.currTask = getCurrentTaskObject();
        };

        $scope.delete = function($index) {
            $scope.todoViewControl.tasks.splice($index, 1);
            $scope.todoViewControl.messageControl = {
                title: labelsForControllersFactory.getLabel('ALERT_GREET'),
                message: labelsForControllersFactory.getLabel('TASK_DELETED')
            };
            (!$scope.todoViewControl.tasks.length) && $scope.archive();
        };

        $scope.archive = function() {
            localStorage.setItem('tasks', angular.toJson(this.todoViewControl.tasks));
        };

        $scope.clearCompleted = function() {
            this.todoViewControl.tasks = this.todoViewControl.tasks.filter(function(task) {
                return !task.done;
            });
            $scope.archive();
        };

        $scope.toggleTask = function(task) {
            task.selected = !task.done;
        };
  }]);
