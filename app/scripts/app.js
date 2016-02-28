'use strict';

angular
  .module('ToDoApp', ['ngAnimate', 'ngRoute', 'translate'])
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
