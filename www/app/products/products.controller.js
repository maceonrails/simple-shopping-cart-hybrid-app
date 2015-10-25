(function() {
    'use strict';

    angular
        .module('app.products')
        .controller('ProductsController', ProductsController);

    ProductsController.$inject = ['dataService'];

    /* @ngInject */
    function ProductsController(dataService) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'ProductsController';
        vm.products = []
        vm.getProducts = getProducts

        activate();

        function activate() {
            return getProducts().then(function () {
                console.log('success')
            });
        }

        function getProducts () {
            return dataService.getProducts().then(function (result) {
                vm.products = result
                return vm.products
            })
        }

    }
})();