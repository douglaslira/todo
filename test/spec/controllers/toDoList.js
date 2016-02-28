'use strict';

describe('Controller: ToDoList', function () {

    beforeEach(module('ToDoApp'));

    var ToDoListController, scope;

    var getFakeTasks = function(totalOfTasks) {
        var tasks = [];
        for(var i=0; i<totalOfTasks; i++) {
            tasks.push({
                description: 'toto',
                done: false,
                editing: false
            })
        }
        return tasks;
    };

    var fillScopeTaskList = function(totalOfTasks) {
        var taskList = getFakeTasks(totalOfTasks);
        taskList.forEach(function(task) {
            scope.add(task);
        });
    };

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ToDoListController = $controller('ToDoListController', {
            $scope: scope
        });
        scope.initToDoListController();
    }));

    it('should attach view object control to the scope', function () {
        var keys = Object.keys(scope.todoViewControl);
        expect(keys.length).toBe(3);
    });

    it('should add task to the list', function () {
        fillScopeTaskList(1);
        expect(scope.todoViewControl.tasks.length).toBe(1);
    });

    it('should delete task from the list', function () {
        fillScopeTaskList(4);
        scope.delete(0);
        scope.delete(1);
        expect(scope.todoViewControl.tasks.length).toBe(2);
    });

    it('should clear completed tasks', function () {
        fillScopeTaskList(2);
        scope.todoViewControl.tasks[0].done = true;
        scope.clearCompleted();
        expect(scope.todoViewControl.tasks.length).toBe(1);
    });
});
