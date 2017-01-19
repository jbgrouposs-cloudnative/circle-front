angular.module('app')
    .factory('feedService', ['Restangular', function(Restangular) {
        return Restangular.service('articles');
    }]);