(function(){
'use strict';

angular.module('myApp.services', ['ngResource']).
  value('version', '0.1').
  factory('Beer', ['$resource', '$q',
    function($resource, $q) {
      return $resource('/api/beers/:id', {id: '@id'}, {
        query: {method: 'GET', isArray: true},
        get: {method: 'GET'},
        save: {method: 'POST'},
        update: {method: 'PUT'},
        remove: {method: 'DELETE'}
      });
    }
  ]);
})();

