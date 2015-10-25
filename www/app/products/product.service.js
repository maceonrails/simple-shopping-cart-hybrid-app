(function() {
    'use strict';

    angular
        .module('app.products')
        .factory('productService', productService);

    productService.$inject = [];

    /* @ngInject */
    function productService() {
        var service = {
            getFullName: getFullName
        };
        return service;

        function getFullName(product) {
        	return getOptionalInfo(product) + product.name
        }

        function getOptionalInfo (product) {
        	return product.product_types ? _.pluck(product.product_types, 'name').join(" ") + " " : ""
        }
    }
})();