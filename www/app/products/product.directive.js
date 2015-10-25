(function() {
    'use strict';

    angular
        .module('app.products')
        .directive('cbProduct', cbProduct);

    cbProduct.$inject = ['$timeout'];

    /* @ngInject */
    function cbProduct($timeout) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: {
                product: '='
            },
            controller: ProductController,
            controllerAs: 'vm',
            templateUrl: 'app/products/product.html',
            link: link,
            restrict: 'EA',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
            element.find('button').bind('click', function() {
                element.find('button').text('Added');
                $timeout(function() {
                    element.find('button').text('Add to cart');
                }, 500);
            });
        }
    }

    ProductController.$inject = ['$scope', '$rootScope', 'productService', 'cartService'];

    /* @ngInject */
    function ProductController($scope, $rootScope, productService, cartService) {
        var vm = this;
        vm.quantity = 1
        vm.fullName = productService.getFullName(vm.product)
        $scope.addToCart = addToCart

        function addToCart (product, quantity) {
            cartService.addToCart(product, quantity)
            $rootScope.$broadcast('cart-changed');
        }
    }
})();