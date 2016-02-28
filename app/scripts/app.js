'use strict';

angular
  .module('ToDoApp', ['ngRoute', 'translate'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/toDoList.html',
        controller: 'ToDoListController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
