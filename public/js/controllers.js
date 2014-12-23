'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('BeerListController', function ($scope, Beer) {
    console.log('Beer List Controller');

    $scope.beers = Beer.query();

    $scope.remove = function(id) {
      Beer.remove({id: id});
      $scope.beers = Beer.query();
    }
  }).
  controller('BeerShowController', function ($scope, $routeParams, Beer) {
    console.log('Beer Show');

    $scope.beer = Beer.get({id: $routeParams.id});
  }).
  controller('BeerSaveController', function ($scope, $routeParams, Beer) {
    console.log('Beer Save Controller');

    $scope.beer = {};

    if ($routeParams.id) {
      $scope.title = 'Alterar cerveja';

      var $id = $routeParams.id;
      $scope.beer = Beer.get({id: $id});
      $scope.save = function() {
        delete $scope.beer._id;
        console.log(Beer.update({id: $id}, $scope.beer));
      }
    }
    else {
      $scope.title = 'Cadastro de cervejas';

      $scope.save = function() {
        var save = Beer.save($scope.beer);
        console.log(JSON.stringify(save));
      }
    }
  });
