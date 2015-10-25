(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('dataService', dataService);

    dataService.$inject = ['$http', '$q'];

    /* @ngInject */
    function dataService($http, $q) {
    		var baseUrl = 'http://shopping-cart-api.herokuapp.com/api/v1/'
        var service = {
            getProducts: getProducts
        };
        return service;

        function getProducts() {
        	return $http.get(baseUrl + 'products').then(function (result) {
        		return result.data
        	}, function (error) {
        		return error
        	})
        }
    }
})();